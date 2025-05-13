"use client"

import { Container, Form, Row } from "react-bootstrap";
import CustomButton from "@/app/component/UI/CustomButton";


export default function AddProduct(){
    return(
        <Container 
            style={{
                paddingTop:'30px',
                paddingBottom:'70px'
                }}>
            <Row>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter product name" />
                </Form.Group>
                
                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Product images</Form.Label>
                    <Form.Control type="file" multiple />
                    <Form.Text>You can upload more than one images</Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Price</Form.Label>
                    <Form.Control 
                        style={{ appearance: "none", margin: "0px"}}
                        type="number" 
                        placeholder="Price" 
                        />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Product Category</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option>Choose a category</option>
                            <option value="Instant Foods / Noodles">	Instant Foods / Noodles </option>
                            <option value="Pasta & Noodles">	Pasta & Noodles </option>
                            <option value="Grains & Staples"> Grains & Staples </option>
                            <option value="Cooking Oils"> Cooking Oils </option>
                        </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <CustomButton titled="submt" />
                </Form>
            </Row>
        </Container>
    )
}