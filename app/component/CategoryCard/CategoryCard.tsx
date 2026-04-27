"use client"

import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import CategoryCardStyle from './CategoryCard.module.css';
import CustomButton from '../UI/CustomButton';
import { useRouter } from 'next/navigation';
import {motion} from 'motion/react'

function CategoryCard({source, admin, category, description}:{source:string, admin:boolean, category:string, description:string}) {
  const navigate = useRouter();

  return (
    <Col className={CategoryCardStyle.container} xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
      <Card style={{borderRadius:'0px', border:'0px'}}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onHoverStart={() => console.log('hover started!')}>
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
          </motion.div>  
        </Card>
    </Col>
  );
}

export default CategoryCard;