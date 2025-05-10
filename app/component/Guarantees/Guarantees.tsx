import { Col, Row } from "react-bootstrap";
import { FaBus, FaPhone, FaTag, FaCreditCard } from "react-icons/fa";
import GuranteesStyle from './Gurantees.module.css';


export default function Guarantees(){
    return (
        <Row className={GuranteesStyle.container}>
            <Col className="d-flex justify-content-center align-items-center">
                <div className={GuranteesStyle.containerIcon}>
                    <FaBus size={40} />  
                    <p>Delivery</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div className={GuranteesStyle.containerIcon}>
                    <FaCreditCard size={40} />  
                    <p>Secure Shopping</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div className={GuranteesStyle.containerIcon}>
                    <FaPhone size={40} />  
                    <p>Online Shop</p>
                </div>
            </Col>
            <Col className="d-flex justify-content-center align-items-center">
                <div className={GuranteesStyle.containerIcon}>
                    <FaTag size={40} />  
                    <p>Top Discounts</p>
                </div>
            </Col>
        </Row>
    )
}