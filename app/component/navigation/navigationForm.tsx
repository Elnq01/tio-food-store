"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

export default function Navigationform() {
  return (
    <Form className="mx-auto w-50 d-none d-md-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button>Search</Button>
    </Form>
  );
}
