"use client"

import Card from 'react-bootstrap/Card';
import { Button, CardImgOverlay, Col } from 'react-bootstrap';
import CategoryCardStyle from './CategoryCard.module.css';
import CustomButton from '../UI/CustomButton';

function CategoryCard({source, admin}:any) {
  return (
    // background-color: #FEFEFC;
    <Col className={CategoryCardStyle.container} xs={12} sm={12} md={4} xl={4} xxl={4}>
        <Card style={{borderRadius:'0px', border:'0px'}}>
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
              {admin?null:<CustomButton />}
          </Card.Body>
          {/* <Card.Text>Grains</Card.Text> */}
          {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card.ImgOverlay>
        </Card>
    </Col>
  );
}

export default CategoryCard;