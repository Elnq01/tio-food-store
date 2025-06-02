"use client";

import ProductSectionStyle from "./ProductSection.module.css";
// import ProductSectionItem from "./ProductSectionItem";
import { Row } from "react-bootstrap";
import ProductCard from "../ProductCard/ProductCard";
import Carousel from 'better-react-carousel';
import CustomButton from "../UI/CustomButton";
import { useRouter } from "next/navigation";
import Overlay from "../UI/overlay";


const fetchDataDB = [
  {
    id:0,
  },
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  },
  {
    id:6
  },
  {
    id:7
  }
]


export default function CardCarousel({title}:any) {
  const navigate = useRouter()

  return (
  <Row className={ProductSectionStyle.container}> 
    {/* <Overlay /> */}
    <div className={ProductSectionStyle.heading}>
      <h4 className={ProductSectionStyle.headingH1}>{title}</h4>
      <CustomButton 
        titled="See More" 
        onClick={() => {navigate.push(`/products`)}} 
        />
    </div>
    <Carousel cols={4} rows={1} gap={10} loop={false} showDots>  
      {fetchDataDB.map(item => <Carousel.Item key={item.id} style={{border:"2px solid red", background:'red'}}>
              <ProductCard 
                onClick={() => {navigate.push(`/products/${item.id}`)}} 
              />
        </Carousel.Item>)}
    </Carousel>
  </Row>);
}


