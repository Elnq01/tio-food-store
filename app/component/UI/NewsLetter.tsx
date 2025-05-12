"use client"

import { Seconadry } from '@/public/colors/colos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function NewsLetter() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button style={{background:Seconadry, border:'0px'}} type="submit">
        Submit
      </Button>
    </Form>
  );
}