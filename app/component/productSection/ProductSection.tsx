"use client"

import ProductSectionStyle from "./ProductSection.module.css";
import Carousel from 'react-bootstrap/Carousel';
import ProductSectionItem from "./ProductSectionItem";
import {Primary} from '../../../public/colors/colos'


export default function ProductSection({title}) {
  return (
    <Carousel className={ProductSectionStyle.container}>
        <div style={{background:Primary}} className={ProductSectionStyle.heading}>
            <h4>{title}</h4>
            <button>See More</button>
        </div>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <ProductSectionItem />
      </Carousel.Item>
      <Carousel.Item>
        <ProductSectionItem />
        {/* <ExampleCarouselImage text="Second slide" /> */}
      </Carousel.Item>
      <Carousel.Item>
        <ProductSectionItem />
        {/* <ExampleCarouselImage text="Third slide" /> */}
      </Carousel.Item>
    </Carousel>
  );
}

