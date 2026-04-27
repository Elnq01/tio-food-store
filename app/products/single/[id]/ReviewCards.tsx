import { Card } from "react-bootstrap"
import ProductRatImg from "../../../../public/avatar.jpg";
import Image from 'next/image';
import ProductRating from "./Rating";
import ReviewCardsCss from "./reviewcards.module.css";
import { ReviewType } from "@/app/actions/reviewActionServer";

export default function ReviewCards({name, time, rating, review}:ReviewType){
    return <Card className={`shadow-sm ${ReviewCardsCss.container}`}>
                <div style={{marginBottom:'10px', display:'flex', flexDirection:'row', columnGap:'10px'}}>
                    <Image src={ProductRatImg} width={50} height={50} style={{borderRadius:'50%'}} alt="avatar image" />
                    <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}} >
                        <h5 style={{marginBottom:'0px'}}>{name}</h5>
                        <span style={{marginBottom:'0px', fontSize:'14px'}} className="text-muted">{time}</span>
                    </div>
                </div>
                <ProductRating value={rating} />
                <p className="text-muted"  style={{marginTop:'5px'}}>{review}</p>
            </Card>
}