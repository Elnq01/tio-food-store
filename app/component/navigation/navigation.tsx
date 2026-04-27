"use client";
import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaUserCircle, FaRegUser } from 'react-icons/fa';
import Navigationform from './navigationForm'; 

export default function Navigation({ color }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Navbar expand="lg" className="py-3" style={{ border: 'none' }}>
      <Container fluid className="px-4">
        <Navbar.Brand href="/" style={{ fontWeight: '900', color: color }}>
          TIO FOOD
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto w-100 justify-content-center">
            <div className="d-flex align-items-center w-50">
               {/* Pass color down to search if needed, or it inherits from wrapper */}
               <Navigationform color={color} />
            </div>
          </Nav>

          <Nav className="align-items-center" style={{ color: color }}>
            <Nav.Link href="/Cart" style={{ color: color }}>CART</Nav.Link>
            
            {isLoggedIn ? (
              <NavDropdown 
                title={<FaUserCircle size={25} style={{ color: color }} />} 
                id="user-dropdown" 
                align="end"
              >
                <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={() => setIsLoggedIn(false)}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login" style={{ color: color }} className="d-flex align-items-center gap-2">
                <FaRegUser size={20} />
                <span>LOGIN</span>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}