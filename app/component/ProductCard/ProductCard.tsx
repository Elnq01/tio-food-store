"use client"

import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { CardImgOverlay, Col } from 'react-bootstrap';

function ProductCard() {
  return (
    <Col border="info" md={3}>
        <Card>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Img style={{height:'200px'}} variant="bottom" src={ProductImage.src} />
        
      <Card.ImgOverlay>
          <Card.Body>
              <Card.Title><strong>Price: </strong>$200</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{textDecoration:'strike'}}>$300</Card.Subtitle>
              <Card.Text>
              Some quick example text to build on the card title .
              </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card.ImgOverlay>
        </Card>
    </Col>
  );
}

export default ProductCard;