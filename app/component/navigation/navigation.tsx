"use client"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import navigationStyle from './navigation.module.css';
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";
import {OffWhite, Primary, WarmCream} from '../../../public/colors/colos'
import Navigationform from './navigationForm';
import { Col } from 'react-bootstrap';
import Image from 'next/image';
import Avatar from '../../../public/avatar.jpg';
import Logo from '../UI/logo';
import { useRouter } from 'next/navigation';

function Navigation() {
  const navigate = useRouter();
  return (
    <>
      <Navbar
        style={{
              background:OffWhite
              }} 
        sticky='top' 
        className={`shadow-sm ${navigationStyle.container}`}>
          <div 
            style={{
              display:'flex',
              flexDirection:'row',
              width:'100%', 
              justifyContent:'space-evenly',
              }}> 
              <Col md={2} className='d-flex align-items-center gap-3 pl-7'>  
                <Navbar.Brand href="#"><Logo /></Navbar.Brand>
              </Col>
              <Col md={9} className='d-flex align-items-center gap-3'>
                <Navigationform />
              </Col>
              <Col md={1} className=" d-flex align-items-center gap-3" >
                  <Nav.Link 
                    style={{
                      background:"rgb(214, 243, 216)",
                      padding:'8px',
                      borderRadius:'50%'
                      }} href="/cart">
                      <FaShoppingCart size={18} style={{color:Primary}} />
                    </Nav.Link>
                  <Nav.Link
                  style={{
                      // background:"rgb(214, 243, 216)",
                      // height:'20px',
                      // width:'20px',
                      padding:'10px',
                      borderRadius:'50%'
                      }}
                   href="/profile">
                    {/* <FaUser style={{color:Primary}}  /> */}
                      <Image src={Avatar} height={30} width={30} alt='avatar' />
                  </Nav.Link>
              </Col>
          </div>
        <Nav className={`${navigationStyle.navContainer}`}>
            <div  className='ms-auto d-flex align-items-center gap-3'>
              <Nav.Link className={navigationStyle.navLink} onClick={() => navigate.push('/')} href="#home">Home</Nav.Link>
              <Nav.Link className={navigationStyle.navLink} onClick={() => navigate.push('/category')} href="#features">Products</Nav.Link>
              <Nav.Link className={navigationStyle.navLink} onClick={() => navigate.push('#about')} href="#pricing">About</Nav.Link>
            </div>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;