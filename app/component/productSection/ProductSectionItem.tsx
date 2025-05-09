"use client"

import { Container, Row } from 'react-bootstrap';
import ProductCard from '../ProductCard/ProductCard';

function ProductSectionItem() {
  return (
    <Container style={{background:'blue'}} className='p-0' fluid>
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </Container>
  );
}

export default ProductSectionItem;