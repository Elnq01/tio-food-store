import { Row, Col} from "react-bootstrap";
import {BackgroundDark, TextLight} from '../../../public/colors/colos';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import FooterStyle from './Footer.module.css';



export default function Footer(){
    return (<>
        <Row className={FooterStyle.container} style={{background:BackgroundDark}}>
            <Col md={4}> Terms & conditions </Col>
            <Col md={4}> 
                <h5>Help Center</h5>
                <p>Chat with us</p>
            </Col>
            {/* <Col md={3}></Col> */}
            <Col md={4}> 
                <h5>Connect with us on:</h5>
                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        <FaFacebook size={30} />
                        <FaTwitter size={30} />
                        <FaInstagram size={30} />
                    </div>
             </Col>
        </Row>
        <Row className={FooterStyle.containerLower}>
            <p>copyright 2025. All right reserved.</p>
        </Row>
        </>
    )
}