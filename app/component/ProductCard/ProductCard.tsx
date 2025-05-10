"use client"

import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { Button, CardImgOverlay, Col } from 'react-bootstrap';
import ProductCardStyle from './ProductCard.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { Accent, Primary, Secondary } from '@/public/colors/colos';

function ProductCard() {
  return (
    // background-color: #FEFEFC;
    <Col className={ProductCardStyle.container} md={3}>
        <Card style={{borderRadius:'0px', border:'0px'}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Img src={ProductImage.src} />
        
      {/* <Card.ImgOverlay> */}
          <Card.Body>
              <Card.Text style={{color:Primary}}>
                In stock
              </Card.Text>
              <Card.Title>King's Oil 1 Liter</Card.Title>
              <Card.Subtitle 
                style={{
                  marginTop:'15px',
                  marginBottom:'12px'
                  }}>
                <p>
                  <strong>Price: </strong>
                  <span style={{color:Primary}}>₦200</span>    <s className="mb-2 text-muted">₦300</s>
                </p>
              </Card.Subtitle>
              <Button 
                style={{
                  display:'flex', 
                  flexDirection:'row', 
                  alignItems:'center', 
                  textAlign:'center',
                  columnGap:'10px',
                  color:Primary,
                  background:"rgb(214, 243, 216)",
                  border:'none'
                  }}>
                  <FaCartPlus size={20} /> 
                  <p>Add to Cart</p>
              </Button>
          </Card.Body>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        {/* </Card.ImgOverlay> */}
        </Card>
    </Col>
  );
}

export default ProductCard;