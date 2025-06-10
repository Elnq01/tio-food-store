"use client"

import Card from 'react-bootstrap/Card';
import ProductImage from '../../../public/king-500x500.jpg';
import { Button, Col } from 'react-bootstrap';
import ProductCardStyle from './ProductCard.module.css';
import { FaCartPlus } from 'react-icons/fa';
import { Primary, WarmCream } from '@/public/colors/colos';
import CustomButton from '../UI/CustomButton';

function ProductCard({admin, price, productName, productImages, onClick}:any) {
  return (
    <Col className={ProductCardStyle.container} md={3} onClick={onClick}>
        <Card style={{
          borderRadius:'10px',
          paddingLeft:'2px',
          paddingRight:'2px',
          paddingTop:'2px', 
          border:'0px', 
          background:"white"
          }}
          className='shadow-sm'
          >
        <Card.Img src={ProductImage.src} />
        {/* <Card.Img src={productImages[0]} /> */}
        
          <Card.Body>
              <Card.Text style={{color:Primary}}>
                In stock
              </Card.Text>
              <Card.Title>{productName}</Card.Title>
              <Card.Subtitle 
                style={{
                  marginTop:'15px',
                  marginBottom:'12px'
                  }}>
                <p>
                  <strong>Price: </strong>
                  <span style={{color:Primary}}>₦{price}</span>    <s className="mb-2 text-muted">₦300</s>
                </p>
              </Card.Subtitle>
              {admin?null:<Button 
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
              </Button>}
              {admin?<CustomButton titled='Update Product'  />:null}
              {admin?<CustomButton titled='Delete Product' color="rgb(247, 108, 108)"/>:null}
          </Card.Body>
        </Card>
    </Col>
  );
}

export default ProductCard;