"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { Primary, Seconadry } from '@/public/colors/colos';

export default function Navigationform() {
  return (
    <Form className="mx-auto w-50 d-none d-md-flex">
      <FormControl
        type="search"
        placeholder="Search"
        aria-label="Search"
        className='me-2'
        style={{
          color:Primary
          }}
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
