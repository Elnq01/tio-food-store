import { OffWhite, Seconadry } from "@/public/colors/colos";
import { Col } from "react-bootstrap";

export default function Advert(){
    return (
        <Col m={3} 
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