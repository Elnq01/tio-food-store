"use client"

import { useSearchParams } from 'next/navigation';
import PaginationBar from './PaginationBar';

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

  return (
    <div className="container mt-4">
      <h2>Products</h2>
      <ul> 
         {paginatedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <PaginationBar currentPage={page} totalPages={totalPages} />
    </div>
  );
}
