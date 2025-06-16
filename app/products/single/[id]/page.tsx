"use client"

import SingleStyle from "./single.module.css";
// import {Primary, Secondary, Accent} from '../../../public/colors/colos'
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import customButton from "@/app/component/UI/CustomButton";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
// import CustomButton from "../UI/CustomButton";



export default function Category() {
    
  const router = useRouter();
//   const params = useParams()
  return (
    <div className={SingleStyle.container}>     
        <Breadcrumb>
            <Breadcrumb.Item 
                onClick={() => {
                    router.push('/');
                }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item 
                onClick={() => {
                    router.push('/');
                }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Category
            </Breadcrumb.Item>
        </Breadcrumb>
        <Row className={SingleStyle.body}>
            <Col xl={7} style={{background:'red', display:'flex', flexDirection:'row'}}>
                <div>carousel</div>
                <div>
                    <h3>Mama's Pride Rice</h3>
                    <h4>price: <span>N20,000</span> <span style={{textDecoration:'underline'}}>N30,000</span> </h4>
                    <h5>Quality</h5>
                    <customButton titled="Add to Cart" />
                    <div>
                        <h4>Share </h4>
                    </div>
                </div>
            </Col>
            <Col xl={5}>
                <h1>Delivery Settings: </h1>
            </Col>

        </Row> 
    </div>
  );
}

