"use client"

import FormControlElement from "../../addProduct/FormControl";
import { Alert, Container, Form,  Row } from "react-bootstrap";
import CustomButton from "@/app/component/UI/CustomButton";
import { useRef, useState } from "react";
import { updateProduct } from "@/app/actions/actionServer";
import { useRouter, useParams } from "next/navigation";


const formControls = [
    {
        id:0,
        label:"Product Name",
        placeholder:'Enter product name',
        name:"productName"
    },
    {
        id:1,
        label:"Product Images",
        placeholder:'You can upload more than one images',
        name:'productImages'
    },
    {
        id:2,
        label:"Price",
        placeholder:'Price',
        name:'price'
    },
    {
        id:3,
        label:"Product Category",
        name:'productCategory'
    },
    {
        id:4,
        label:"Description",
        placeholder:"Description",
        name:'description'
    }
]



export default async function updateProduct(){
    // get the id of the product to fectch
    // its data
    const params = useParams();
    const productData = await updateProduct(params);

    const formRef = useRef(null);
    // const navigate = useRouter();

    const [formState, setFormState] = useState({
        productName: "",
        productImages: [],
        price: "",
        productCategory: "",
        description: ""
    });

    // const [cloudinaryErr, setCloudinaryErr] = useState("");
    // const [cloudinaryLoader, setCloudinaryLoader] = useState(false);
    // const [cloudinarySuccess, setCloudinarySuccess] = useState(false);
    // const [formSubmitLoader, setFormSubmitLoader] = useState(false);


    function onChangeHandler(e){
        const {name, value, files} = e.target;
        let inputValue = (name === "productImages" ? [...files] : value);

        setFormState(prevState => ({
            ...prevState,
            [name]:inputValue
        }));

    }


    async function onSubmitHandler(e){
        e.preventDefault();

        // do the validation of the inputs here
        if(formState.productName == ""){
            const productName = formRef.current["productName"];
            productName.setCustomValidity("Empty")
            productName.reportValidity(); 
            return
        } else if(formState.productImages.length == 0){
            const productImage = formRef.current["productImages"];
            productImage.setCustomValidity("Empty")
            productImage.reportValidity(); 
            return
        } else if(formState.price == ""){
            const productPrice = formRef.current["price"];
            productPrice.setCustomValidity("Empty")
            productPrice.reportValidity(); 
            return
        } else if(formState.productCategory == ""){
            const productCategory = formRef.current["productCategory"];
            // console.log("hjfh: ", productCategory)
            productCategory.setCustomValidity("Empty")
            productCategory.reportValidity();
            return
        } else if(formState.description == ""){
            const productDescription = formRef.current["description"];
            productDescription.setCustomValidity("Empty")
            productDescription.reportValidity(); 
            return
        }

        // Upload images to Cloudinary
        // const uploadedImageUrls = [];
        //     for (let file of formState.productImages) {
        //         const url = await uploadToCloudinary(file);
        //         // console.log("let me see 2: ", url);
        //         uploadedImageUrls.push(url);
        // }

        // Now build the form payload to submit
        // const productData = {
        //     ...formState,
        //     productImages: uploadedImageUrls
        // };
                
        // // submitting the form
        // setFormSubmitLoader(true);

        // try{
        //     await createProduct(productData);
        //     setFormSubmitLoader(false);
        //     setFormState({
        //         productName: "",
        //         productImages: [],
        //         price: "",
        //         productCategory: "",
        //         description: ""
        //     })

        //     // redirecting to the dashboad
        //     navigate.push("/admin/products");

        // }catch(err){
        //     console.log("Err Sumitting the Form: ", err)
        // }
    
}


    async function uploadToCloudinary(file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "products"); // from Cloudinary settings
        // setCloudinaryLoader(true);

        try{
            const response = await fetch("https://api.cloudinary.com/v1_1/djn9lztmo/image/upload", {
                method: "POST",
                body: formData
            });
            const data = await response.json()
            // setCloudinaryLoader(false);
            // setCloudinarySuccess(true);
            return data.secure_url;

        }catch(err){
            // console.log("My err: ", typeof err, err.message, err);
            // setCloudinaryErr(err.message);
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
                    {/* {cloudinaryErr?<Alert variant="danger">{cloudinaryErr}</Alert>:null} */}
                    {formControls.map(formcontrol =>{
                        return <FormControlElement 
                        value={formState[formcontrol.name]}
                        // isLoading={cloudinaryLoader}
                        // success={cloudinarySuccess}
                        onChange={onChangeHandler}
                        {...formcontrol} 
                        key={formcontrol.id} />
                    })}
                    <CustomButton titled="submit" 
                    // isLoading={formSubmitLoader}
                    onClick={onSubmitHandler}
                     />
                </Form>
            </Row>
        </Container>
    )
}

