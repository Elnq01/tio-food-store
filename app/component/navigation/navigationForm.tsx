"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
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
          // border:'0px', 
          // borderBottom:`2px solid ${Primary}`, 
          // marginRight:'0px !important',
          // borderRadius:'0px',
          color:Primary
          }}
      />
      <Button 
        style={{
          background:Seconadry,
          border:'0px',
          // borderBottom:`2px solid ${Primary}`,
          // color:Primary,
          // margin:'0px',
          // borderRadius:'0px'
          // borderTopLeftRadius:'0px',
          // borderBottomLeftRadius:'0px'
          }}>
            Search
      </Button>
    </Form>
  );
}
