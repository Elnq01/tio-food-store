"use client"

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from './CarouselItem';
import { Col } from 'react-bootstrap';
import { Primary, Graphite } from '@/public/colors/colos';
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
    return <Col md={6} >
    <Carousel interval={undefined}>
      
  {carouselItemSeed.map(item => {
      return <Carousel.Item style={{borderRadius:'20px'}} key={item.id}>
        <CarouselImage  />
        <Carousel.Caption 
            style={{
              position:'absolute',  
              left:'0px',
              color:Graphite, 
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
