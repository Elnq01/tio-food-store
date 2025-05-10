"use client"

import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './CarouselItem';
import { Col } from 'react-bootstrap';
// import ExampleCarouselImage from '../../favicon.ico';

export default function CarouselSection() {
  return (<Col md={6}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <ExampleCarouselImage  />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <ExampleCarouselImage  />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage  />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
  </Col>
  );
}
