"use client"

import { useSearchParams } from "next/navigation";
import { Col, Row } from "react-bootstrap";
import SearchCSS from "./search.module.css";
import { ProductType, searchProducts } from "../actions/actionServer";
import NotFound from "../../public/notfound.png";
import Image from "next/image";
import ProductCard from "../component/ProductCard/ProductCard";
import { useEffect, useState } from "react";
import {  WarmCream } from "@/public/colors/colos";
import { useRouter } from "next/navigation";


export default function Search() {
// export default async function Search({searchParams }: { searchParams: { item: string } }) {
//   await connect();

    const navigate = useRouter();

    const [result, setResult] = useState<ProductType[]>([]);

    const query = useSearchParams();
    // console.log("The Search Params: ", query.get("item"))
    // const query = await searchParams?.item;
    const resultData = async () =>{
        const result = await searchProducts(query.get("item") || "")
        setResult(result);
        // console.log("The Search Params: ", result);

    }

    useEffect(() => {
        resultData()
    },[])

    return <Row  className={SearchCSS.cont}>
        <Col  style={{background:WarmCream, padding:"20px 2%"}} xs="12" sm="12" md="12" lg="12" xl="12" xxl="12">
        <h2>Results</h2>
            {result.length == 0?<div className={SearchCSS.not}>
                {/* Item not found! */}
                <Image src={NotFound} alt="not found" style={{width:'30%', height:'30%' }} />
            </div>:<div>
                    {result.map(item => {
                        return <ProductCard 
                                key={item._id} 
                                admin={false}
                                _id={item._id}
                                productName={item.productName}
                                price={item.price}
                                productImages={item.productImages}
                                onClick={() => {navigate.push(`/products/single/${item._id}`)}} 

                                 />
                    })}
                </div>}
        </Col>
    </Row>
}