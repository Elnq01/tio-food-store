"use client"

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselItem';
import { Col } from 'react-bootstrap';
import { Primary, TextDark } from '@/public/colors/colos';
import CustomButton from "../UI/CustomButton";

const carouselItemSeed = [
  {
    id:0,
    desc:"Fresh and healthy",
    category:"FRUITS AND VEGETABLE",
    price:200
  },
  {
    id:1,
    desc:"Fresh and healthy",
    category:"FRUITS AND VEGETABLE",
    price:200
  }
]

export default function CarouselSection() {
    return <Col md={6}>
    <Carousel>
      
  {carouselItemSeed.map(item => {
      return <Carousel.Item key={item.id} interval={1000}>
        <CarouselImage  />
        <Carousel.Caption 
            style={{
              position:'absolute',  
              left:'0px',
              color:TextDark, 
              // background:'blue', 
              textAlign:'left',
              marginBottom:'20px',
              paddingLeft:'20px'
              }}>
          <p>{item.desc}</p>
          <h5 style={{color:Primary}}>{item.category}</h5>
          <p>starting at ${item.price}</p>
          <CustomButton />
        </Carousel.Caption>
      </Carousel.Item>
  })}
    </Carousel>
</Col>
}
