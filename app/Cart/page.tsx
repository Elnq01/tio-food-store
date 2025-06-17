import { Col, Row } from "react-bootstrap";
import BasicTable from "./Table";
import CartStyle from "./Cart.module.css";
import DeliveryLocation from "../products/single/[id]/DeliveryLocation";
import { WarmCream } from "@/public/colors/colos";
import CustomButton from "../component/UI/CustomButton";

export default function Cart(){
    return <Row className={CartStyle.container}>
        <Col sm={12} md={6} xl={8} xxl={8}>
            <BasicTable />
        </Col>

        <Col sm={12} md={6} xl={4} xxl={4}>
            <div style={{background:WarmCream, borderRadius:'15px', padding:'20px', marginBottom:'20px'}}>
                <h4  style={{fontWeight:'bolder', marginBottom:'20px'}}>Order Summary</h4>
                <p style={{display:'flex', marginBottom:'10px', flexDirection:'row', justifyContent:'space-between'}}>
                    <span>Items total:</span> <span>₦20,000</span>
                </p>
                <p style={{display:'flex', marginBottom:'10px', flexDirection:'row', justifyContent:'space-between'}}>
                    <span>Delivery:</span> 
                    <span>₦2,000</span>
                </p>
                <h5 style={{fontWeight:'bolder', marginBottom:'10px', display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <span>Total:</span> <span>₦22,000</span>
                </h5>
                <CustomButton titled="Continue To Checkout" />
            </div>                
            
            <div style={{background:WarmCream, borderRadius:'15px', padding:'20px', marginBottom:'40px'}}>
                <h4 style={{fontWeight:'bolder', marginBottom:'30px'}}>Delivery Settings: </h4>
                <h6 style={{marginBottom:'20px'}}>Choose a delivery location</h6>
                <DeliveryLocation />
                <p style={{marginTop:'20px', color:'#75757a'}}>Vary based on your location</p>
            </div>
        </Col>
    </Row>
}