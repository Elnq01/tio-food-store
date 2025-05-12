import Image from "next/image";
import ImageFile from "../../../public/carousel 1.jpg";

export default function CarouselItem(){
    return <div style={{height:"300px"}}>
        {/* <p>{text}</p> */}
        <Image 
            src={ImageFile} 
            alt="carousel Image" 
            style={{
                height:'100%',
                width:"100%",
                borderRadius:'10px'
                }} />
    </div>
}