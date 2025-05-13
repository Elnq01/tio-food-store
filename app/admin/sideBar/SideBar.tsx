"use client"

import { OffWhite, Primary } from '@/public/colors/colos';
import Link from 'next/link';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function Sidebar() {
  return (
    <Col md={3} lg={3} 
        style={{
            background:Primary, 
            position:'fixed', 
            height:'100vh', 
            }}>
        <Nav defaultActiveKey="/" className="flex-column">
        <Link style={{color:OffWhite}} href="/admin">Dashboard</Link>
        <Link style={{color:OffWhite}} href="/admin/products?page=1">Products</Link>
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link> */}
        </Nav>
    </Col>
  );
}