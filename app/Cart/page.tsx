"use client"

import { Col, Row } from "react-bootstrap";
import BasicTable from "./Table";
import CartStyle from "./Cart.module.css";
import DeliveryLocation from "../products/single/[id]/DeliveryLocation";
import { WarmCream } from "@/public/colors/colos";
import SummaryCard from "./SummaryCard";

export default function Cart(){
    return <Row className={CartStyle.container}>
        <Col sm={12} md={6} xl={8} xxl={8}>
            <BasicTable />
        </Col>

        <Col sm={12} md={6} xl={4} xxl={4}>
            <div style={{background:WarmCream, borderRadius:'15px', padding:'20px', marginBottom:'20px'}}>
                <SummaryCard />
            </div>                
            
            <div style={{background:WarmCream, borderRadius:'15px', padding:'20px', marginBottom:'40px'}}>
                <h4 style={{fontWeight:'bolder', marginBottom:'30px'}}>Delivery Settings: </h4>
                <h6 style={{marginBottom:'20px'}}>Choose a delivery location</h6>
                <DeliveryLocation />
                <p style={{fontSize:'12px', color:'red'}}>For Accurate price rates, The format as to be &quot;1 Example Street, Yaba/Alagomeji/Whatever&quot;</p>
                <p style={{fontSize:'12px', color:'red'}}>No special characters</p>
                <p style={{marginTop:'20px', color:'#75757a'}}>Vary based on your location</p>
            </div>
        </Col>
    </Row>
}



