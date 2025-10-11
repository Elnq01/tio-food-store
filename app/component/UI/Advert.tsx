import { OffWhite, Seconadry } from "@/public/colors/colos";
import { Col } from "react-bootstrap";

export default function Advert(){
    return (
        <Col xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}
            style={{
                padding:'10px 10px',
                height:"auto"
                }}>
            <div style={{
                background:Seconadry, 
                borderRadius:'10px',
                color:OffWhite,
                textAlign:'center',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                height:"100%"

            }}>
                <h3>Tio Food Store Delivery</h3>
                <h4>Join Us</h4>    
            </div>
        </Col>
    )
}