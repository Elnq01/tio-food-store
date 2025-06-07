"use client";

import ProductSectionStyle from "./ProductSection.module.css";
// import ProductSectionItem from "./ProductSectionItem";
import ProductCard from "../ProductCard/ProductCard";
import CustomButton from "../UI/CustomButton";
import { useRouter } from "next/navigation";
import Overlay from "../UI/overlay";
import { Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';



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


      <Swiper

        style={{marginBottom:'70px'}}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        cssMode={true}
        // navigation={true}
        slidesPerView={4}
        // spaceBetween={30}
        pagination={true}
        breakpoints={{
            1000:{
                slidesPerView:4
            },
            800:{
                slidesPerView:3
            },

            500:{
                slidesPerView:2
            },

            100:{
                slidesPerView:1
            }
        }}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        
      >
      {fetchDataDB.map(item => <SwiperSlide key={item.id}>
              <ProductCard 
                onClick={() => {navigate.push(`/products/${item.id}`)}} 
              />
        </SwiperSlide>)}
    </Swiper>
  </Row>);
}







