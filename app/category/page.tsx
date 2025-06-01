"use client"

import CategorySectionStyle from "./category.module.css";
// import {Primary, Secondary, Accent} from '../../../public/colors/colos'
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import CategoryCard from "@/app/component/CategoryCard/CategoryCard";
import CategoryImage1 from '../../public/indomie.webp';
import CategoryImage2 from '../../public/indomie 1.avif';
import CategoryImage3 from '../../public/indomie 2.avif';
import Link from "next/link";
import { useRouter } from "next/navigation";
// import CustomButton from "../UI/CustomButton";


export default function Category() {
    
  const router = useRouter();
  return (
    <div className={CategorySectionStyle.container}>     
        <Breadcrumb>
            <Breadcrumb.Item 
                onClick={() => {
                    router.push('/');
                }}>
                Home
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
                Category
            </Breadcrumb.Item>
        </Breadcrumb>
        <div className={CategorySectionStyle.heading}>
            <h4 className={CategorySectionStyle.headingH1}>Categories</h4>
            {/* <button>See More</button> */}
            {/* <CustomButton titled="See More" /> */}
        </div>
        <Col className={CategorySectionStyle.body}>
            <CategoryCard  source={CategoryImage1.src} admin={true} />
            <CategoryCard source={CategoryImage2.src} admin={true} />
            <CategoryCard source={CategoryImage3.src} admin={true} />
            
            <CategoryCard source={CategoryImage1.src} admin={true} />
            <CategoryCard source={CategoryImage2.src} admin={true} />
            <CategoryCard source={CategoryImage3.src} admin={true} />
        </Col> 
    </div>
  );
}

