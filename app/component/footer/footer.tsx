import { Row, Col} from "react-bootstrap";
import {CharcoalBlack} from '../../../public/colors/colos';
import { FaFacebook, FaTwitter, FaInstagram, FaSnapchat } from "react-icons/fa";
import FooterStyle from './Footer.module.css';
import Image from "next/image";
import CreditCards from "../../../public/carousel 2.jpg"



export default function Footer(){
    return (<>
        <Row className={FooterStyle.container} style={{background:CharcoalBlack}}>
            <Col md={3}>
                <p style={{marginBottom:'20px'}}> Terms & conditions </p>
                <Image src={CreditCards} alt="credit cards" />
            </Col>
            <Col md={3}> 
                <h5>Help Center</h5>
                <p>Chat with us</p>
            </Col>
            <Col md={3}>
            
            </Col>
            <Col md={3}> 
                <h5>Connect with us on:</h5>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <FaFacebook size={30} />
                        <FaTwitter size={30} />
                        <FaSnapchat size={30} />
                        <FaInstagram size={30} />
                    </div>
             </Col>
        </Row>
        <Row className={FooterStyle.containerLower}>
            <p>copyright &copy; 2025. All right reserved.</p>
        </Row>
        </>
    )
}