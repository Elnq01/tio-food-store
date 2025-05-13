"use client"

import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../component/UI/CustomButton";

export default function Admin(){
    return (<Container fluid>
        <div>
            <CustomButton titled="Add Product" />
        </div>
        <Row>
            <Col md={6}>
                Number of Sells: 200
            </Col>
            <Col md={6}>
            
            </Col>
        </Row>
        </Container>
    )
}