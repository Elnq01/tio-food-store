"use client"

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navigationStyle from './navigation.module.css';
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import {Primary, Secondary, BackgroundDark, BackgroundLight} from '../../../public/colors/colos'
import Navigationform from './navigationForm';

function Navigation() {
  return (
    <>
      <Navbar sticky='top' style={{background:BackgroundLight}}>
        <Navbar.Brand href="#">Tio Food Store</Navbar.Brand>
        <Navigationform />
        <Nav className="ms-auto d-flex align-items-center gap-3">
            {/* <Nav.Link href="/search"><FaSearch style={{color:Primary}} /></Nav.Link> */}
            <Nav.Link href="/cart"><FaShoppingCart style={{color:Primary}} /></Nav.Link>
            <Nav.Link href="/profile"><FaUser style={{color:Primary}}  /></Nav.Link>
        </Nav>
      </Navbar>
      <Navbar  style={{background:Secondary}} >
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