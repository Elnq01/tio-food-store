"use client"

import { useParams, useRouter, useSearchParams } from 'next/navigation';
import PaginationBar from '../PaginationBar';
import ProductCard from '@/app/component/ProductCard/ProductCard';
import { Breadcrumb, Col } from 'react-bootstrap';
import Link from 'next/link';
import { getProductPaginatedApp } from '../../actions/actionServer';
import { useEffect, useState } from 'react';



export default function Products() {
  const navigate = useRouter();
  const searchParams = useSearchParams();
  const paramsId = useParams();
  const params = decodeURIComponent(paramsId.id)
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0)

  const page = parseInt(searchParams.page || '1');
  const limit = 6;
  // let totalPages;

  useEffect(() => {
      async function getTheProducts(){
      const { products, total, error } = await getProductPaginatedApp(page, limit, params);
      setProducts(products);
      const totalPages = Math.ceil(total / limit);
      setTotalPages(totalPages);
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
            <Col md={4} lg={4} key={product.id} style={{width:'100%'}}>
                <ProductCard  admin={false}/>
            </Col>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
