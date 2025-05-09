"use client"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navigationStyle from './navigation.module.css';
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

function Navigation() {
  return (
    <>
      <Navbar  className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#">Tio Food Store</Navbar.Brand>
        </Container>
        <Nav className="ms-auto d-flex align-items-center gap-3">
            <Nav.Link href="/search"><FaSearch /></Nav.Link>
            <Nav.Link href="/cart"><FaShoppingCart /></Nav.Link>
            <Nav.Link href="/profile"><FaUser /></Nav.Link>
        </Nav>
      </Navbar>
      <Navbar bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Nav className={`ms-auto d-flex align-items-center gap-3 ${navigationStyle.navContainer}`}>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Products</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;