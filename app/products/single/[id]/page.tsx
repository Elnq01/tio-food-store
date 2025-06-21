"use client"

import SingleStyle from "./single.module.css";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { useParams, useRouter } from "next/navigation";
import SingleCarousel from "./carousel";
import { Primary, WarmCream } from "@/public/colors/colos";
import CustomButton from "@/app/component/UI/CustomButton";
import FaceBookSrc from "../../../../public/facebook.png";
import TwitterSrc from "../../../../public/twitter.png";
import InstagramSrc from "../../../../public/instagram.png";
import Image from "next/image";
import TabbedNav from "./Tabbed";
import Rating from "./Rating";
import DeliveryLocation from "./DeliveryLocation";
import ProductCard from "@/app/component/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import { retrieveAProduct } from "@/app/actions/actionServer";
import { useStore } from "@/app/store/cart";



export default function SingleProduct() {
    const router = useRouter();
    const params = useParams();
    const [singleProductDetails, setsingleProductDetails] = useState({});

    // getting the slice of the state
    const addProductToCart = useStore((state) => state.addItemToCart)

    useEffect(()=> {
        try{
            async function getSingleProductDetails(param:string){
                const productDetails = await retrieveAProduct(param);
                console.log("The singel product: ", productDetails);
                setsingleProductDetails(productDetails)
            }
            getSingleProductDetails(params.id);
        }catch(err){
            console.log("What is the err: ", err)
        }
    },[])


  return (
    <div className={SingleStyle.container}>
        {singleProductDetails.productName?<>     
        <Breadcrumb>
            <Breadcrumb.Item 
                style={{color:Primary}}
                onClick={() => {
                    router.push('/');
                }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item 
                style={{color:Primary}}
                onClick={() => {
                    router.push('/');
                }}>
                Category
            </Breadcrumb.Item>
            <Breadcrumb.Item
                style={{color:Primary}}
                onClick={() => {
                    router.push(`/products/${singleProductDetails.productCategory}`);
                }}
            >
                {singleProductDetails.productCategory}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                {singleProductDetails.productName}
            </Breadcrumb.Item>
        </Breadcrumb>
        <Row className={SingleStyle.body}>
            <Col xl={7} 
                style={{
                    // background:"red", 
                    background:WarmCream, 
                    display:'flex', 
                    flexDirection:'row', 
                    margin:'10px auto',
                    // marginLeft:
                    borderRadius:'15px',
                    padding:'10px'
                    }}>
                <SingleCarousel />
                <div style={{padding:'20px'}}>
                    <h3 style={{fontWeight:'bolder'}}>{singleProductDetails.productName}</h3>
                    <h6>Brand: Mama Pride</h6>
                    <Rating value={3} />
                    <h4 style={{fontWeight:'bolder'}}>price: <span>{singleProductDetails.price}</span> </h4>
                    <h6><span style={{textDecoration:'line-through', color:'#75757a'}}>₦30,000</span></h6>
                    <CustomButton titled="Add to Cart" onClick={() => {
                        addProductToCart(singleProductDetails);
                    }} />
                    <div>
                        <h5>SHARE THIS PRODUCT</h5>
                        <div style={{display:'flex', flexDirection:'row', columnGap:'15px'}}>
                            <Image src={FaceBookSrc} height={30} width={30} alt="share" />
                            <Image src={InstagramSrc} height={30} width={30}  alt="share" />
                            <Image src={TwitterSrc} height={30} width={30}  alt="share" />
                        </div>
                    </div>
                </div>
            </Col>
            <Col xl={5} style={{ padding:'10px'}}>
                <div style={{background:WarmCream, borderRadius:'15px',height:'100%', padding:'20px'}}>
                    <h4 style={{fontWeight:'bolder'}}>Delivery Settings: </h4>
                    <h6 style={{marginBottom:'20px'}}>Choose a delivery location</h6>
                    <DeliveryLocation />
                    <p style={{marginTop:'20px', color:'#75757a'}}>Vary based on your location</p>
                </div>
            </Col>

        </Row> 
        <div style={{padding:'20px', marginTop:'30px', background:WarmCream}}>
            <TabbedNav description={singleProductDetails.description} />
        </div>
        <div style={{padding:'20px', marginTop:'30px', background:WarmCream}}>
            <h4>Related Products</h4>
            <Row>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </div></>:<p>Loading</p>}
    </div>
  );
}

