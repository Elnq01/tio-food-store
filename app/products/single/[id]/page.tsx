"use client"

import SingleStyle from "./single.module.css";
// import {Primary, Secondary, Accent} from '../../../public/colors/colos'
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
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



export default function Category() {
    
  const router = useRouter();
//   const params = useParams()
  return (
    <div className={SingleStyle.container}>     
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
            >
                Category
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Mama Gold Rice
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
                    <h3 style={{fontWeight:'bolder'}}>Mama's Pride Rice</h3>
                    <h6>Brand: Mama Pride</h6>
                    <Rating value={3} />
                    <h4 style={{fontWeight:'bolder'}}>price: <span>₦20,000</span> </h4>
                    <h6><span style={{textDecoration:'line-through', color:'#75757a'}}>₦30,000</span></h6>
                    <CustomButton titled="Add to Cart" />
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
            <TabbedNav />
        </div>
        <div style={{padding:'20px', marginTop:'30px', background:WarmCream}}>
            <h4>Related Products</h4>
            <Row>
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </Row>
        </div>
    </div>
  );
}

