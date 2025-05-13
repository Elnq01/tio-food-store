'use client';

import { Pagination } from 'react-bootstrap';
import Link from 'next/link';

export default function PaginationBar({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const items = [];

  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        as={Link}
        href={`/products?page=${page}`}
      >
        {page}
      </Pagination.Item>
    );
  }

  return <Pagination className="mt-3">{items}</Pagination>;
}
