"use client"

import ProductSectionStyle from "./ProductSection.module.css";
import Carousel from 'react-bootstrap/Carousel';
import ProductSectionItem from "./ProductSectionItem";
import {Primary, Secondary, Accent} from '../../../public/colors/colos'
import { Container, Row } from "react-bootstrap";


export default function ProductSection({title}) {
  return (
    <div className={ProductSectionStyle.container}>
        <div className={ProductSectionStyle.heading}>
            <h4 className={ProductSectionStyle.headingH1}>{title}</h4>
            <button>See More</button>
        </div>
        <Carousel>
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
    </div>
  );
}

