"use client"

import { FaAnglesRight } from "react-icons/fa6";
import Nav from 'react-bootstrap/Nav';
import { Col } from "react-bootstrap";
import SideBarStyle from './SideBar.module.css';
import SideBarIcons from "./SidebarIcon";
import { useRouter } from "next/navigation";


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
    const navigate = useRouter();

  return (
    <Col className={SideBarStyle.container} md={3}>
        <Nav defaultActiveKey="/home" className="flex-column">
        {SideBarLinks.map(link => <Nav.Link 
        key={link.id} 
        className={SideBarStyle.containerLink} 
        onClick={() => navigate.push(`/products/${link.link}`)}
        eventKey="link-1" >
            <SideBarIcons type={link.link} />
            <p>{link.link}</p>
            <FaAnglesRight
                style={{
                    position:'absolute',
                    right:'0px'
                    }} size={10} />
        </Nav.Link>)}
        </Nav>
    </Col>
  );
}
