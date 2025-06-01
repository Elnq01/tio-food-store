"use client"

import ProductSectionStyle from "./ProductSection.module.css";
// import ProductSectionItem from "./ProductSectionItem";
import {Primary} from '../../../public/colors/colos'
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import Carousel from 'better-react-carousel';
import CustomButton from "../UI/CustomButton";
import Link from "next/link";


export default function CardCarousel({title}) {
  return (<div className={ProductSectionStyle.container}> 
        <div className={ProductSectionStyle.heading}>
            <h4 className={ProductSectionStyle.headingH1}>{title}</h4>

            <Link href='/products'>
              <CustomButton titled="See More" />
            
            </Link>
            {/* See More</button> */}
        </div>
    <Carousel cols={4} rows={1} gap={10} loop={false} showDots>  
      <Carousel.Item style={{border:"2px solid red", background:'red'}}>
        <Link href="/products/1">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/2">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/3">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/4">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/5">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/6">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/7">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/8">
            <ProductCard />
        </Link>
      </Carousel.Item>
      <Carousel.Item>           
        <Link href="/products/9">
            <ProductCard />
        </Link>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}


