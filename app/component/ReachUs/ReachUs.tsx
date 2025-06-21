"use client"

import { Col, Row } from "react-bootstrap";
import ReachUsStyle from './ReachUs.module.css';
import NewsLetter from "../UI/NewsLetter";
import {FaMailBulk, FaMapMarker, FaPhone} from "react-icons/fa";
import { Seconadry } from "@/public/colors/colos";
import FaceBookSrc from "../../../public/facebook.png";
import TwitterSrc from "../../../public/twitter.png";
import InstagramSrc from "../../../public/instagram.png";
import SnapChatSrc from "../../../public/snapchat.png"
import Image from "next/image";

export default function ReachUs(){
    return (
        <Row className={ReachUsStyle.container}>
            <Col md={3} style={{paddingLeft:'4%', paddingRight:'4%'}}>
                <div style={{display:'grid', gridTemplateColumns:"50px 2fr", columnGap:'3px', marginBottom:"10px"}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <FaPhone size={24}   color={Seconadry} />
                    </div>
                    <p><b>Phone:</b> <span style={{color:"rgb(80, 80, 80)"}}>+234906474888</span></p>
                </div>

                <div style={{display:'grid', gridTemplateColumns:"50px 1fr", columnGap:'3px', marginBottom:"10px"}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <FaMapMarker size={24}   color={Seconadry} />
                    </div>
                    <p><b>Address:</b> <span style={{color:"rgb(80, 80, 80)"}}>5171 W Campbell AvfinKent, Utah 53127 United States</span></p>
                </div>

                  <div style={{display:'grid', gridTemplateColumns:"50px 1fr", columnGap:'3px', marginBottom:"10px"}}>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <FaMailBulk size={24}   color={Seconadry} />
                    </div>
                    <p><b>Email:</b> <span style={{color:"rgb(80, 80, 80)"}}>tio@gmail.com</span></p>
                </div>
            </Col>
            <Col md={3}>
                <h5><b>Help Center</b></h5>
                <p><b>Whatsapp: </b><span  style={{color:"rgb(80, 80, 80)"}}>+234912345678</span></p>
                {/* <p>Chat with us</p> */}
            </Col>
            <Col md={3}>
                <h5><b>NewsLetter</b></h5>
                <NewsLetter />
            </Col>
            <Col md={3}>
                <h5><b>Connect with us on:</b></h5>
                    <div style={{display:'flex', flexDirection:'row', columnGap:'10px'}}>
                        <Image src={FaceBookSrc} alt="Facebook" height={30} width={30} />
                        <Image src={TwitterSrc} alt="Twitter" height={30} width={30} />
                        <Image src={SnapChatSrc} alt="Snapchat" height={30} width={30} />
                        <Image src={InstagramSrc} alt="Instagram" height={30} width={30} />
                    </div>
            </Col>
        </Row>
    )
}