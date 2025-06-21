"use client"

import CategorySectionStyle from "./category.module.css";
import { Breadcrumb, Row } from "react-bootstrap";
import CategoryCard from "@/app/component/CategoryCard/CategoryCard";
import CategoryImage1 from '../../public/indomie.webp';
import CategoryImage2 from '../../public/indomie 1.avif';
import CategoryImage3 from '../../public/indomie 2.avif';
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
  },
  {
    id:3,
    category:"Grains",
    description:"Everyday Fresh & Clean with Our Products"
  },
  {
    id:4,
    category:"Cooking Oils",
    description:"Everyday Fresh & Clean with Our Products"
  },
  {
    id:5,
    category:"Processed Foods",
    description:"Everyday Fresh & Clean with Our Products"
  }
]



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
        <Row className={CategorySectionStyle.body}>
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

