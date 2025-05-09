"use client"

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { Col } from 'react-bootstrap';

function ProductCard() {
  return (
    <Col md={3}>
        <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Img variant="top" src={ProductImage.src} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </Col>
  );
}

export default ProductCard;