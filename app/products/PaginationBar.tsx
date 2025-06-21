'use client';

import { Pagination } from 'react-bootstrap';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function PaginationBar({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const searchParams = useSearchParams();

  const createPageLink = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', page.toString());
    return `?${params.toString()}`;
  };

  const items = [];

  // First
  items.push(
    <Pagination.First
      key="first"
      disabled={currentPage === 1}
      as={Link}
      href={createPageLink(1)}
    />
  );

  // Prev
  items.push(
    <Pagination.Prev
      key="prev"
      disabled={currentPage === 1}
      as={Link}
      href={createPageLink(currentPage - 1)}
    />
  );

  // Page numbers
  for (let page = 1; page <= totalPages; page++) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        as={Link}
      // style={{background:Primary, color:Primary}}
        href={createPageLink(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  // Next
  items.push(
    <Pagination.Next
      key="next"
      disabled={currentPage === totalPages}
      as={Link}
      href={createPageLink(currentPage + 1)}
    />
  );

  // Last
  items.push(
    <Pagination.Last
      key="last"
      disabled={currentPage === totalPages}
      as={Link}
      href={createPageLink(totalPages)}
    />
  );

  return <Pagination 
            className="mt-3 d-flex align-items-center justify-content-center">
              {items}
        </Pagination>;
}

