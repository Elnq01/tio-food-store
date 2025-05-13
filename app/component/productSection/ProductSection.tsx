"use client"

import ProductSectionStyle from "./ProductSection.module.css";
// import ProductSectionItem from "./ProductSectionItem";
import {Primary} from '../../../public/colors/colos'
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import Carousel from 'better-react-carousel';
import CustomButton from "../UI/CustomButton";


export default function CardCarousel({title}) {
  return (<div className={ProductSectionStyle.container}> 
        <div className={ProductSectionStyle.heading}>
            <h4 className={ProductSectionStyle.headingH1}>{title}</h4>
            <CustomButton titled="See More" />
            {/* See More</button> */}
        </div>
    <Carousel cols={4} rows={1} gap={10} loop={false} showDots>  
      <Carousel.Item style={{border:"2px solid red", background:'red'}}>
            <ProductCard />
      </Carousel.Item>
      <Carousel.Item>            
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
      <Carousel.Item>
        <ProductCard />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


