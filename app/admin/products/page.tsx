// "use client"

// import { useSearchParams } from 'next/navigation';
import PaginationBar from './PaginationBar';
import ProductCard from '@/app/component/ProductCard/ProductCard';
import { Col } from 'react-bootstrap';
import ProductInput from './ProductInput';
import { getProductPaginated } from '@/app/actions/actionServer';

// const allProducts = Array.from({ length: 30 }).map((_, index) => ({
//   id: index + 1,
//   name: `Product ${index + 1}`,
//   price: (Math.random() * 100).toFixed(2),
// }));

export default async function Products({searchParams}) {

  const page = parseInt(searchParams.page || '1');
  const limit = 6;
  const { products, total, error } = await getProductPaginated(page, limit);
  const totalPages = Math.ceil(total / limit);


  return (
    <div className="container mt-4">
        <ProductInput />
      {/* <h2>Products</h2> */}
      <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}> 
         {products.map((product) => (
            <Col md={4} lg={4} key={product._id} style={{width:'100%'}}>
                <ProductCard {...product} admin={true}/>
            </Col>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
