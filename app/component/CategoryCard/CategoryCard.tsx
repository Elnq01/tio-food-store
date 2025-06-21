"use client"

import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import CategoryCardStyle from './CategoryCard.module.css';
import CustomButton from '../UI/CustomButton';
import { useRouter } from 'next/navigation';

function CategoryCard({source, admin, category, description}:{source:string, admin:boolean, category:string, description:string}) {
  const navigate = useRouter();

  return (
    <Col className={CategoryCardStyle.container} xs={12} sm={12} md={4} xl={4} xxl={4}>
        <Card style={{borderRadius:'0px', border:'0px'}}>
        <Card.Img src={source} />
        
      <Card.ImgOverlay>
          <Card.Body>
              <Card.Title>
                {description}
              </Card.Title>
              <Card.Subtitle 
                style={{
                  marginTop:'15px',
                  marginBottom:'12px'
                  }}>
                    {category}
              </Card.Subtitle>
              {admin?null:<CustomButton onClick={()=> navigate.push(`/products/${category}`)} />}
          </Card.Body>
        </Card.ImgOverlay>
        </Card>
    </Col>
  );
}

export default CategoryCard;