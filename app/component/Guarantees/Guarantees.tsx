import { Col, Row } from "react-bootstrap";
import { FaBus, FaPhone, FaTag, FaCreditCard } from "react-icons/fa";
import GuranteesStyle from './Gurantees.module.css';
import { Primary } from "@/public/colors/colos";


export default function Guarantees(){
    return (
        <Row className={GuranteesStyle.container}>
            <div className={GuranteesStyle.overlay}></div>
            <Col className="d-flex justify-content-center align-items-center">
                <div 
                // style={{background:"rgb(214, 243, 216)", color:Primary}} 
                className={GuranteesStyle.containerIcon}>
                    <FaBus size={40} />  
                    <p>World Class Delivery</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div 
                // style={{background:'#d8d2ff', color:'#6c5ebc'}} 
                className={GuranteesStyle.containerIcon}>
                    <FaCreditCard size={40} />  
                    <p>Secure Shopping</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div 
                    // style={{background:'rgb(245, 190, 190)', color:'rgb(211, 64, 64)'}}
                 className={GuranteesStyle.containerIcon}>
                    <FaPhone size={40} />  
                    <p>Online Shop</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div 
                // style={{background:'rgb(240, 240, 191)', color:'rgb(184, 184, 43)'}} 
                className={GuranteesStyle.containerIcon}>
                    <FaTag size={40} />  
                    <p>Top Discounts</p>
                </div>
            </Col>
        </Row>
    )
}