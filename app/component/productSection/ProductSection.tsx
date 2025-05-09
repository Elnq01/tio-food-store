"use client"

import Carousel from 'react-bootstrap/Carousel';
import ProductCarouselItem from './ProductSectionItem';
import { Col, Container, Row } from 'react-bootstrap';
import ProductSectionStyle from "./ProductSection.module.css";


function ProductSection() {
  return (
    <Container className={ProductSectionStyle.container} fluid>
        <div className={ProductSectionStyle.heading}>
            <h1>Hot's Products</h1>
            <button>See More</button>
        </div>
        <Carousel>
        <Carousel.Item>
            <ProductCarouselItem />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
            <ProductCarouselItem />
            <Carousel.Item>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>        
            <ProductCarouselItem />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Container>
  );
}

export default ProductSection;