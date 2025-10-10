import { Row, Col} from "react-bootstrap";
import FooterStyle from './Footer.module.css';
import Image from "next/image";
import CreditCards from "../../../public/carousel 2.jpg"



export default function Footer(){
    return (<>
        <Row className={FooterStyle.containerLower}>
            <Col xs={12} sm={12} md={6} xl={6} xxl={6} style={{textAlign:'left', display:'flex', alignItems:'center'}}>
                <p>copyright &copy; 2025. All right reserved.</p>
            </Col>
            <Col xs={12} sm={12} md={6} xl={6} xxl={6} style={{display:'flex', alignItems:'center', flexDirection:'row', justifyContent:'flex-end'}}>
                {/* <p style={{marginBottom:'20px'}}> Terms & conditions </p> */}
                <Image src={CreditCards} alt="credit cards" />
            </Col>
        </Row>
        </>
    )
}