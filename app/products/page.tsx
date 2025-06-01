"use client"

import { useRouter, useSearchParams } from 'next/navigation';
import PaginationBar from './PaginationBar';
import ProductCard from '@/app/component/ProductCard/ProductCard';
import { Breadcrumb, Col } from 'react-bootstrap';
import Link from 'next/link';


const allProducts = Array.from({ length: 30 }).map((_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 100).toFixed(2),
}));

export default function Products() {

  const searchParams = useSearchParams();
  const pageParam = searchParams.get('page');
  const page = parseInt(pageParam || '1');
  const limit = 6;
  const total = allProducts.length;
  const totalPages = Math.ceil(total / limit);

  const startIndex = (page - 1) * limit;
  const paginatedProducts = allProducts.slice(startIndex, startIndex + limit);
  
  
  const router = useRouter();

  return (
    <div className="container mt-4">

      <Breadcrumb>
        <Breadcrumb.Item onClick={() => {
          router.push('/')
        }}>
            Home
        </Breadcrumb.Item>
        <Breadcrumb.Item onClick={() => {
          router.push('/category')
        }}>
            Category
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
            Product
        </Breadcrumb.Item>
    </Breadcrumb>

      {/* <h2>Products</h2> */}
      <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}> 
         {paginatedProducts.map((product) => (
            <Col md={4} lg={4} key={product.id} style={{width:'100%'}}>
                <ProductCard  admin={false}/>
            </Col>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
