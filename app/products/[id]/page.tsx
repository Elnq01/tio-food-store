"use client"

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import PaginationBar from '../PaginationBar';
import ProductCard from '@/app/component/ProductCard/ProductCard';
import { Breadcrumb, Col } from 'react-bootstrap';
import { getProductPaginatedApp, ProductType } from '../../actions/actionServer';
import { useEffect, useState } from 'react';


type PartialProduct = {
  _id: string;
  // add any other fields getProduct() returns
};

export default function Products() {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const paramsId = useParams();
  const id = paramsId.id as string;
  const params = decodeURIComponent(id)
  const [products, setProducts] = useState<PartialProduct[]>([]);
  const [totalPages, setTotalPages] = useState(0)

  const page = parseInt(searchParams.get("page") ?? '1');
  const limit = 6;
  // let totalPages;

  useEffect(() => {
      async function getTheProducts(){
      const productDetails = await getProductPaginatedApp(page, limit, params);
      // const { products, total, error } = await getProductPaginatedApp(page, limit, params);
      if(productDetails){
        setProducts(productDetails.products);
        const totalPages = Math.ceil(productDetails.total / limit);
        setTotalPages(totalPages);
      }
  }

  getTheProducts();

  // const { products, total, error } = getTheProducts();
  }, []);

  // const totalPages = Math.ceil(total / limit);

  // console.log("The products: ", searchParams, params, products)

  return (
    <div className="container mt-4">

      <Breadcrumb>
        <Breadcrumb.Item onClick={() => {
          navigate.push('/')
        }}>
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => {
          navigate.push('/category')
        }}>
            Category
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
            {params}
        </Breadcrumb.Item>
    </Breadcrumb>

      <h2>{params}</h2>
      <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}> 
         {products.map((product) => (
            <Col md={4} lg={4} key={product._id} style={{width:'100%'}}>
                <ProductCard price="2000" productName="Mama Gold" _id="1" onClick={()=> alert("Hello World")}  admin={false}/>
            </Col>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
