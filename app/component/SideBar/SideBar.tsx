"use client"

import { FaBowlRice, FaOilCan, FaSpaghettiMonsterFlying, FaAnglesRight } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';
import { Col } from "react-bootstrap";
import SideBarStyle from './SideBar.module.css';


const SideBarLinks = [
    {
        id:0,
        link:"Grains"
    },
    {
        id:1,
        link:"Cooking Oils"
    },
    {
        id:2,
        link:"Processed Foods"
    },
    {
        id:3,
        link:"Grains"
    },
    {
        id:4,
        link:"Cooking Oils"
    },
    {
        id:5,
        link:"Processed Foods"
    }
]


export default function SideBar() {
  return (
    <Col className={SideBarStyle.container} md={3}>
        <Nav defaultActiveKey="/home" className="flex-column">
        {/* <Nav.Link href="/home">Active</Nav.Link> */}
        {SideBarLinks.map(link => <Nav.Link key={link.id} className={SideBarStyle.containerLink} eventKey="link-1" >
            <FaBowlRice />
            <p>{link.link}</p>
            <FaAnglesRight
                style={{
                    position:'absolute',
                    right:'0px'
                    }} size={10} />
        </Nav.Link>)}
        {/* <Nav.Link className={SideBarStyle.container} eventKey="link-1" >
            <FaOilCan />
            <p>Cooking Oils</p>
        </Nav.Link>
        <Nav.Link className={SideBarStyle.container} eventKey="link-1" >
            <FaSpaghettiMonsterFlying />
            <p>Processed Foods</p>
        </Nav.Link>
        <Nav.Link className={SideBarStyle.container} eventKey="link-1" >
            <FaBowlRice />
            <p>Link</p>
        </Nav.Link>
        <Nav.Link className={SideBarStyle.container} eventKey="link-1" >
            <FaOilCan />
            <p>Link</p>
        </Nav.Link> */}
        </Nav>
    </Col>
  );
}
