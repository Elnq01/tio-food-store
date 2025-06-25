import PaginationBar from './PaginationBar';
import ProductCard from '@/app/component/ProductCard/ProductCard';
import { Col } from 'react-bootstrap';
import ProductInput from './ProductInput';
import {getProductPaginated } from '@/app/actions/actionServer';



export default async function Products({searchParams}: {searchParams: { page: string }}) {

  const page = parseInt(searchParams.page || '1');
  const limit = 6;
  // const { products = [], total = 0, error } = await getProductPaginated(page, limit);
  const { products, total = 0 } = (await getProductPaginated(page, limit)) || {};
  const totalPages = Math.ceil(total / limit);

  console.log("The products: ", products)


  return (
    <div className="container mt-4">
        <ProductInput />
      <ul style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr'}}> 
         {products?.map((product) => (
            <Col md={4} lg={4} key={product._id} style={{width:'100%'}}>
                <ProductCard 
                price="20000" 
                productName="Indomie" 
                // {...product}
                onClick={() => alert("Hello World!")} 
                {...product} 
                admin={true}/>
            </Col>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
