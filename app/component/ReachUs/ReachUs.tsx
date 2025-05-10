"use client"

import { Col, Row } from "react-bootstrap";
import ReachUsStyle from './ReachUs.module.css';
import NewsLetter from "../UI/NewsLetter";

export default function ReachUs(){
    return (
        <Row className={ReachUsStyle.container}>
            <Col md={3}>
                <h5>Phone</h5>
                <p>+234906474888</p>
            </Col>
            <Col md={3}>
                <h5>Email</h5>
                <p>tio@gmail.com</p>
            </Col>
            <Col md={3}>
                <h5>NewsLetter</h5>
                <NewsLetter />
            </Col>
            <Col md={3}>
                <h5>WhatsApp</h5>
                <p>+234912345678</p>
            </Col>
        </Row>
    )
}