"use client"

import CategorySectionStyle from "./CategorySection.module.css";
import { Row } from "react-bootstrap";
import CategoryCard from "../CategoryCard/CategoryCard";
import CategoryImage1 from '../../../public/indomie.webp';
import CategoryImage2 from '../../../public/indomie 1.avif';
import CategoryImage3 from '../../../public/indomie 2.avif';
import CustomButton from "../UI/CustomButton";
import { useRouter } from "next/navigation";

const categoryData = [
  {
    id:0,
    category:"Grains",
    description:"Everyday Fresh & Clean with Our Products"
  },
  {
    id:1,
    category:"Cooking Oils",
    description:"Everyday Fresh & Clean with Our Products"
  },
  {
    id:2,
    category:"Processed Foods",
    description:"Everyday Fresh & Clean with Our Products"
  }
]

export default function CategorySection({title}:{title:string}) {
  const navigate = useRouter();

  return (
    <div className={CategorySectionStyle.container}>
        <div className={CategorySectionStyle.heading}>
            <h4 className={CategorySectionStyle.headingH1}>{title}</h4>
            <CustomButton titled="See More" onClick={()=>{navigate.push("/category")}} />
        </div>
        <Row className={CategorySectionStyle.body}>
            {/* <CategoryCard source={CategoryImage1.src} />
            <CategoryCard source={CategoryImage2.src} />
            <CategoryCard source={CategoryImage3.src} /> */}
            {categoryData.map(category => {
              if(category.category == "Grains"){
                return <CategoryCard admin={false} key={category.id} {...category} source={CategoryImage3.src} />
              } else if(category.category == "Cooking Oils"){
                return <CategoryCard admin={false} key={category.id} {...category} source={CategoryImage2.src} />
              }else{
                return <CategoryCard admin={false} key={category.id} {...category} source={CategoryImage1.src} />
              }
              })}
        </Row> 
    </div>
  );
}

