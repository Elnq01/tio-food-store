
import Link from 'next/link'
import Sidebar from './sideBar/SideBar';
import { Col, Row } from 'react-bootstrap';
// import "./globals.css";
// import localFont from "next/font/local";
// import { Metadata } from 'next';
// import Navigation from "./component/navigation/navigation";





export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <Row style={{margin:'0px', padding:'0px'}}>
            <Sidebar />
            <Col md={9} lg={9} style={{padding:'30px', marginLeft:'25%'}}>
                <div style={{right:'0px', top:'0px'}}>
                    {children}
                </div>
            </Col>
        </Row>);
}
