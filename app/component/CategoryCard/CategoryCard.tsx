"use client"

import Card from 'react-bootstrap/Card';
import { Button, CardImgOverlay, Col } from 'react-bootstrap';
import CategoryCardStyle from './CategoryCard.module.css';
import { FaCartPlus, FaGreaterThan } from 'react-icons/fa';
import { Accent, BackgroundLight, Primary, Secondary } from '@/public/colors/colos';

function CategoryCard({source}) {
  return (
    // background-color: #FEFEFC;
    <Col className={CategoryCardStyle.container} md={4}>
        <Card style={{borderRadius:'0px', border:'0px', height:'250px'}}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        {/* <Card.Header as="h5">Featured</Card.Header> */}
        <Card.Img src={source} />
        
      <Card.ImgOverlay>
          <Card.Body>
              {/* <Card.Text style={{color:Primary}}>
                In stock
              </Card.Text> */}
              <Card.Title>
                Everyday Fresh & Clean with Our Products
              </Card.Title>
              <Card.Subtitle 
                style={{
                  marginTop:'15px',
                  marginBottom:'12px'
                  }}>
                    Grains
              </Card.Subtitle>
              <Button 
                style={{
                  display:'flex', 
                  flexDirection:'row', 
                  alignItems:'center', 
                  textAlign:'center',
                  columnGap:'10px',
                  color:BackgroundLight,
                  background:Primary,
                  marginTop:'20px',
                  marginBottom:'20px',
                  border:'none'
                  }}>
                  <p>Shop Now</p>
                  <FaGreaterThan size={10} /> 
              </Button>
          </Card.Body>
          <Card.Text>Grains</Card.Text>
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card.ImgOverlay>
        </Card>
    </Col>
  );
}

export default CategoryCard;