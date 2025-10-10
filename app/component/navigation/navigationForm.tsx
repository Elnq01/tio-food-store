"use client"

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FormControl } from 'react-bootstrap';
import { Primary, Seconadry } from '@/public/colors/colos';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Navigationform() {
  const navigate = useRouter()
  const [search, setSearch] = useState('');

  const handleSearch = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
    // console.log("RESULT: ", e.target.value)
    setSearch(e.target?.value)
  }

  const onSubmitHandler = (e:React.FormEvent) => {
    e.preventDefault();
    const searchQuery = search.trim();
    navigate.push(`/search?item=${searchQuery}`)

  }

  return (
    // <Form className="mx-auto w-50 d-none d-md-flex" onSubmit={onSubmitHandler}>
    <Form style={{width:'100%', padding:'0px 5%'}} className="mx-auto d-flex" onSubmit={onSubmitHandler}>
      <FormControl
        type="search"
        placeholder="Search"
        aria-label="Search"
        className='me-2'
        value={search}
        onChange={handleSearch}
        style={{
          color:Primary
          }}
      />
      <Button 
        // onClick={onSubmitHandler}
        style={{
          background:Seconadry,
          border:'0px'
          }}>
            Search
      </Button>
    </Form>
  );
}
