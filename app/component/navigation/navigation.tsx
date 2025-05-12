"use client"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navigationStyle from './navigation.module.css';
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import {Primary, Secondary, BackgroundDark, BackgroundLight} from '../../../public/colors/colos'
import Navigationform from './navigationForm';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';

function Navigation() {
  return (
    <>
      <Navbar sticky='top' className={navigationStyle.container}>
          <div 
            style={{
              display:'flex',
              flexDirection:'row',
              width:'100%', 
              justifyContent:'space-evenly'
              }}> 
              <Col md={2} style={{paddingLeft:"20px", textAlign:'center'}}>  
                <Navbar.Brand href="#">Tio Food Store</Navbar.Brand>
              </Col>
              <Col md={9}>
                <Navigationform />
              </Col>
              <Col md={1} className=" d-flex align-items-center gap-3" >
                  <Nav.Link 
                    style={{
                      background:"rgb(214, 243, 216)",
                      padding:'10px',
                      borderRadius:'50%'
                      }} href="/cart">
                      <FaShoppingCart style={{color:Primary}} />
                    </Nav.Link>
                  <Nav.Link href="/profile">
                    {/* <FaUser style={{color:Primary}}  /> */}
                      <Image src={Avatar} alt='avatar' />
                  </Nav.Link>
              </Col>
          </div>
        <Nav className={`${navigationStyle.navContainer}`}>
            <div  className='ms-auto d-flex align-items-center gap-3'>
              <Nav.Link className={navigationStyle.navLink} href="#home">Home</Nav.Link>
              <Nav.Link className={navigationStyle.navLink} href="#features">Products</Nav.Link>
              <Nav.Link className={navigationStyle.navLink} href="#pricing">About</Nav.Link>
            </div>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;