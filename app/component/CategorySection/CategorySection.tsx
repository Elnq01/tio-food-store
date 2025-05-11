"use client"

import CategorySectionStyle from "./CategorySection.module.css";
import {Primary, Secondary, Accent} from '../../../public/colors/colos'
import { Col, Container, Row } from "react-bootstrap";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryImage1 from '../../../public/indomie.webp';
import CategoryImage2 from '../../../public/indomie 1.avif';
import CategoryImage3 from '../../../public/indomie 2.avif';


export default function CategorySection({title}) {
  return (
    <div className={CategorySectionStyle.container}>
        <div className={CategorySectionStyle.heading}>
            <h4 className={CategorySectionStyle.headingH1}>{title}</h4>
            <button>See More</button>
        </div>
        <Col className={CategorySectionStyle.body}>
            <CategoryCard source={CategoryImage1.src} />
            <CategoryCard source={CategoryImage2.src} />
            <CategoryCard source={CategoryImage3.src} />
        </Col> 
    </div>
  );
}

