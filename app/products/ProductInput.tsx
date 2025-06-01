"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import { Seconadry } from '@/public/colors/colos';

export default function Navigationform() {
  return (
    <Form className="mx-auto w-50 d-none d-md-flex pb-10">
      <FormControl
        type="search"
        placeholder="Search for product.."
        className="me-2"
        aria-label="Search"
      />
      <Button 
        style={{
          background:Seconadry,
          border:'0px'
          }}>
            Search
      </Button>
    </Form>
  );
}
