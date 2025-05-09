import { Col, Row } from "react-bootstrap";
import { FaBus, FaPhone, FaTag } from "react-icons/fa";
import GuranteesStyle from './Gurantees.module.css';


export default function Guarantees(){
    return (
        <Row className={GuranteesStyle.container}>
            <Col style={{background:'red'}}><FaBus />Delivery</Col>
            <Col>Online Shop <FaPhone /></Col>
            <Col>Top Discounts <FaTag /></Col>
        </Row>
    )
}