"use client"

import FormControlElement from "./formControl";
import { Alert, Container, Form,  Row } from "react-bootstrap";
import CustomButton from "@/app/component/UI/CustomButton";
import { useEffect, useRef, useState } from "react";
import { retrieveAProduct, updateProduct } from "@/app/actions/actionServer";
import { useParams, useRouter } from "next/navigation";
import { formControls, FormStateShape } from "./formControls";
import { deleteImgCloudinary } from "@/app/actions/cloudinaryActionServer";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import { Primary } from "@/public/colors/colos";


export default function updateProductComponent(){
    const formRef = useRef<HTMLFormElement>(null);   
    const navigate = useRouter(); 
    
    // form state
    const [formState, setFormState] = useState<FormStateShape>({
        productName: "",
        productImages: [],
        price: "",
        productCategory: "",
        description: ""
    });
    const [activateForm, setActivateForm] = useState(true);

    // get the id of the product to fectch
    // its data
    const paramet = useParams();
    const params = paramet.id as string;

    async function fetchASingleProduct(params:string) {
        try{
            const productData = await retrieveAProduct(params);
            setActivateForm(false);
            console.log("Update retrieved: ", productData);
            if(productData){
                setFormState(productData);
            }
        }catch(err){
            console.log("Fetch Err: ", err);
        }
    }

    useEffect(()=> {
        fetchASingleProduct(params);

        console.log("the product images src: ", formState);
    },[params]);



    const [cloudinaryErr, setCloudinaryErr] = useState("");
    const [cloudinaryLoader, setCloudinaryLoader] = useState(false);
    const [cloudinarySuccess, setCloudinarySuccess] = useState(false);
    const [formSubmitLoader, setFormSubmitLoader] = useState(false);


    function onChangeHandler(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        const {name, value, files} = e.target  as HTMLInputElement;
        let inputValue;

        if(name === "productImages"){
            const convFilelistToArr = [...(files || [])];
            const filesModified = convFilelistToArr.map(file => ({file, secure_url:URL.createObjectURL(file)}))
            inputValue = [...formState.productImages, ...filesModified];

        }else{
            inputValue = value;
        }


        setFormState(prevState => ({
            ...prevState,
            [name]:inputValue
        }));

    }


    async function onSubmitHandler(e:React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        // console.log("The files in the input: ", formState)

        // do the validation of the inputs here
        if(formState.productName == ""){
            const productName = formRef.current?.["productName"];
            productName.setCustomValidity("Empty")
            productName.reportValidity(); 
            return
        } else if(formState.productImages.length == 0 || formState.productImages.length > 3){
            const productImage = formRef.current?.["productImages"];
            productImage.setCustomValidity("Empty")
            productImage.reportValidity(); 
            return
        } else if(formState.price == ""){
            const productPrice = formRef.current?.["price"];
            productPrice.setCustomValidity("Empty")
            productPrice.reportValidity(); 
            return
        } else if(formState.productCategory == ""){
            const productCategory = formRef.current?.["productCategory"];
            // console.log("hjfh: ", productCategory)
            productCategory.setCustomValidity("Empty")
            productCategory.reportValidity();
            return
        } else if(formState.description == ""){
            const productDescription = formRef.current?.["description"];
            productDescription.setCustomValidity("Empty")
            productDescription.reportValidity(); 
            return
        }



        // Upload images to Cloudinary
        const uploadedImageUrls = [];
        
        for (let file of formState.productImages) {
            if("public_id" in file){
                uploadedImageUrls.push(file);
                // console.log("The file to be uploaded 1: ", file);
            }else{
                // console.log("The file to be uploaded 2: ", file);
                const url = await uploadToCloudinary(file.file);
                uploadedImageUrls.push(url);
            }
        }

        // Now build the form payload to submit
        const productData = {
            ...formState,
            productImages: uploadedImageUrls
        };
                
        // // submitting the form
        setFormSubmitLoader(true);

        try{
            await updateProduct(params, productData);
            // setFormSubmitLoader(false);
            setFormState({
                productName: "",
                productImages: [],
                price: "",
                productCategory: "",
                description: ""
            })

            // redirecting to the dashboad
            navigate.push("/admin/products");

        }catch(err){
            console.log("Err Sumitting the Form: ", err)
        }
    
}


    async function uploadToCloudinary(file:File) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "products"); // from Cloudinary settings
        setCloudinaryLoader(true);


        console.log("What is inside of cloudinary: ", file);

        try{
            const response = await fetch("https://api.cloudinary.com/v1_1/djn9lztmo/image/upload", {
                method: "POST",
                body: formData
            });   

            const data = await response.json()
            setCloudinaryLoader(false);
            setCloudinarySuccess(true);
            console.log("Cloudinary upload in upload page: ", data)

            return {
                secure_url:data.secure_url,
                public_id:data.public_id
            };


        }catch(err){
            console.log("My err: ", err);
            // setCloudinaryErr(err?.message);
        }

    }


    async function onDeleteImgHandler(id:string){

        const oldImagState = [...formState.productImages];
        let newimagState;

        if(!id.includes("http")){
            await deleteImgCloudinary(id);
            newimagState = oldImagState.filter(img => {
                  if ("public_id" in img) {
                        return img.public_id !== id;
                    } else {
                        return img.secure_url !== id;
                    }
                }
                // img?.public_id != id);
            )
        }else{
            console.log("inside the delete block the id: ", id);
            newimagState = oldImagState.filter(img => img.secure_url != id);

        }
            
        const newState = {...formState, productImages:newimagState}
        setFormState(newState);


    }



    return(
        <Container 
            style={{
                paddingTop:'30px',
                paddingBottom:'70px'
                }}>
            <Row>
                <Form ref={formRef}>   
                    <h3>Update Form</h3> 
                    {cloudinaryErr?<Alert variant="danger">{cloudinaryErr}</Alert>:null}
                    {formControls.map(formcontrol =>{
                        return <FormControlElement 
                        value={formcontrol.name === "productImages" ? undefined : formState[formcontrol.name]}
                        disabled={activateForm}
                        isLoading={cloudinaryLoader}
                        success={cloudinarySuccess}
                        // productImages={formState.productImages}
                        // isUpdate={true}
                        onChange={onChangeHandler}
                        {...formcontrol} 
                        key={formcontrol.id} />
                    })}
                    <div style={{display:'flex', flexDirection:'row', columnGap:'10px'}}>
                    {formState.productImages.map((image, index) => (
                        <div key={index} style={{position:'relative'}}>
                            <h4>Preview image {index+1}</h4>
                            <IoClose 
                                size={24}
                                onClick={() => {onDeleteImgHandler("public_id" in image?image.public_id:image.secure_url)}}
                                style={{
                                    cursor:'pointer', 
                                    position:'absolute', 
                                    right:'0px', 
                                    top:'0px',
                                    padding:'5px',
                                    borderRadius:'50%',
                                    background:Primary
                                    }} />
                            <Image alt="preview" src={image.secure_url?image.secure_url:""} width={200} height={200}/>
                        </div>))}
                    </div>
                    <CustomButton titled="submit" 
                    // isLoading={formSubmitLoader}
                    onClick={onSubmitHandler}
                     />
                </Form>
            </Row>
        </Container>
    )
}

