import { OffWhite, Seconadry } from "@/public/colors/colos";
import { Col } from "react-bootstrap";

export default function Advert(){
    return (
        <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}
            style={{
                background:Seconadry, 
                borderRadius:'10px',
                color:OffWhite,
                textAlign:'center',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center'
                }}>
            <h3>Tio Food Store Delivery</h3>
            <h4>Join Us</h4>
        </Col>
    )
}