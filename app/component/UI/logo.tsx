import Image from "next/image";
import imgSrc from "../../../public/Tio food logo_00001.svg"

export default function Logo(){
    return (
        <Image src={imgSrc} alt="logo" height={50} width={50} />
    )
}