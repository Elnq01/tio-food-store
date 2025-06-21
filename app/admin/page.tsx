"use client"

import { Col, Container, Row } from "react-bootstrap";
import CustomButton from "../component/UI/CustomButton";
import { useRouter } from "next/navigation";

export default function Admin(){
    const navigate = useRouter();

    return (<Container fluid>
        <div>
            <CustomButton disable={false} isLoading={false} color="" titled="Add Product" onClick={()=> {navigate.push("/admin/addProduct")}} />
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