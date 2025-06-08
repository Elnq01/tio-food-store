"use client"

import FormControlElement from "./FormControl";
import { Container, Form,  Row } from "react-bootstrap";
import CustomButton from "@/app/component/UI/CustomButton";
import { useRef, useState } from "react";
import { createProduct } from "@/app/actions/actionServer";


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
        // placeholder:[
        //     {
        //         id:0,
        //         des:"Instant Foods / Noodles"
        //     },
        //     {
        //         id:1,
        //         des:"Pasta & Noodles "
        //     },
        //     {
        //         id:2,
        //         des:"Grains & Staples"
        //     },
        //     {
        //         id:3,
        //         des:"Cooking Oils"
        //     }
        // ]
    },
    {
        id:4,
        label:"Description",
        placeholder:"Description",
        name:'description'
    }
]



export default function AddProduct(){

    const formRef = useRef(null);

    const [formState, setFormState] = useState({
        productName: "",
        productImages: [],
        price: "",
        productCategory: "",
        description: ""
    });


    function onChangeHandler(e){
        // console.log("Input element name: ", e.target.name);
        // console.log("Input element value : ", e.target.value);
        const inputValue = e.target.value;
        // const inputValue = e.target.name === "productImages" ? [...e.target.files] : e.target.value;

        setFormState(prevState => ({
            ...prevState,
            [e.target.name]:inputValue
        }));

        console.log("The State: ", formState);
    }


    function onSubmitHandler(e){
        e.preventDefault();

        // do the validation of the inputs here
        if(formState.productName == ""){
            const productName = formRef.current["productName"];
            productName.setCustomValidity("Empty")
            productName.reportValidity(); 
            return
        } else if(formState.productImages == ""){
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
            // submitting the product
            // console.log("What: ", formState);
            formRef.current.submit();
    }



    return(
        <Container 
            style={{
                paddingTop:'30px',
                paddingBottom:'70px'
                }}>
            <Row>
                <Form ref={formRef}
                    // name="what"
                    action={createProduct}
                    // onSubmit={onSubmitHandler}
                    >
                    {formControls.map(formcontrol =>{
                        return <FormControlElement 
                        value={formState[formcontrol.name]}
                        onChange={onChangeHandler}
                        {...formcontrol} 
                        key={formcontrol.id} />
                    })}
                    <CustomButton titled="submt" onClick={onSubmitHandler} />
                </Form>
            </Row>
        </Container>
    )
}

