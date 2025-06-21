"use client"

import FormControlElement from "./FormControl";
import { Alert, Container, Form,  Row } from "react-bootstrap";
import CustomButton from "@/app/component/UI/CustomButton";
import { useRef, useState } from "react";
import { createProduct } from "@/app/actions/actionServer";
import { useRouter } from "next/navigation";
import { formControls } from "./formControls";


export default function AddProduct(){
    // other hooks
    const formRef = useRef<HTMLFormElement>(null);
    const navigate = useRouter();

    // the states
    const [formState, setFormState] = useState({
        productName: "",
        productImages: [],
        price: "",
        productCategory: "",
        description: ""
    });
    const [cloudinaryErr, setCloudinaryErr] = useState("");
    const [cloudinaryLoader, setCloudinaryLoader] = useState(false);
    const [cloudinarySuccess, setCloudinarySuccess] = useState(false);
    const [formSubmitLoader, setFormSubmitLoader] = useState(false);


    function onChangeHandler(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>){
        const {name, value, files} = e.target  as HTMLInputElement;
        let inputValue = (name === "productImages" ? [...(files || [])] : value);

        setFormState(prevState => ({
            ...prevState,
            [name]:inputValue
        }));
    }


    async function onSubmitHandler(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault();

        // do the validation of the inputs here
        if(formState.productName == ""){
            const productName = formRef.current?.["productName"];
            productName.setCustomValidity("Empty")
            productName.reportValidity(); 
            return
        } else if(formState.productImages.length == 0){
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
                const url = await uploadToCloudinary(file);
                uploadedImageUrls.push(url);
        }
        //  const public_url = await updateImgCloudinary(formState.productImages)

        // Now build the form payload to submit
        const productData = {
            ...formState,
            productImages: uploadedImageUrls
        };


        try{
            if(uploadedImageUrls.length !== 0){       
                // submitting the form
                setFormSubmitLoader(true);
                await createProduct(productData);
                setFormSubmitLoader(false);
                setFormState({
                    productName: "",
                    productImages: [],
                    price: "",
                    productCategory: "",
                    description: ""
                })

                // redirecting to the dashboad
                navigate.push("/admin/products");
            } else {
                throw new Error("Image not uploaded!")
            }

        }catch(err){
            console.log("Err Sumitting the Form: ", err)
        } 
}


async function uploadToCloudinary(file:File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "products"); // from Cloudinary settings
    setCloudinaryLoader(true);

    try{
        const response = await fetch("https://api.cloudinary.com/v1_1/djn9lztmo/image/upload", {
            method: "POST",
            body: formData
        });
        
        const data = await response.json()
        setCloudinaryLoader(false);
        setCloudinarySuccess(true);
        console.log("CCloudinary upload: ", data)

        return {
            secure_url:data.secure_url,
            public_id:data.public_id
        };


    }catch(err){
        // console.log("My err: ", typeof err, err.message, err);
        if(err instanceof Error){
            setCloudinaryErr(err.message);
        }else{
            console.log("Error: ", err);
        }
    }
}




    return(
        <Container 
            style={{
                paddingTop:'30px',
                paddingBottom:'70px'
                }}>
            <Row>
                <Form ref={formRef}>
                    {cloudinaryErr?<Alert variant="danger">{cloudinaryErr}</Alert>:null}
                    {formControls.map(formcontrol =>{
                        return <FormControlElement 
                        value={formState[formcontrol.name]}
                        isLoading={cloudinaryLoader}
                        success={cloudinarySuccess}
                        onChange={onChangeHandler}
                        disabled={false}
                        {...formcontrol} 
                        key={formcontrol.id} />
                    })}
                    <CustomButton titled="submit" 
                    isLoading={formSubmitLoader}
                    onClick={onSubmitHandler}
                     />
                </Form>
            </Row>
        </Container>
    )
}

