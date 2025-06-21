"use client"

import { OffWhite, Primary } from '@/public/colors/colos';
import { useRouter } from 'next/navigation';
import { Col } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';

export default function Sidebar() {
  const navigate = useRouter();

  return (
    <Col md={3} lg={3} 
        style={{
            background:Primary, 
            position:'fixed', 
            height:'100vh', 
            }}>
        <Nav defaultActiveKey="/" className="flex-column">
          <div style={{color:OffWhite, cursor:'pointer'}} onClick={() => {navigate.push('/admin')}}>
            Dashboard
          </div>

          <div style={{color:OffWhite, cursor:'pointer'}} onClick={() => {navigate.push('/admin/products?page=1')}}>
            Products
          </div>

        {/* <Link style={{color:OffWhite}} href="/admin/category">Categories</Link> */}
        {/* <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
            Disabled
        </Nav.Link> */}
        </Nav>
    </Col>
  );
}