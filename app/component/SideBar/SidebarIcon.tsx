import Image from "next/image";
import { FaOilCan } from "react-icons/fa";
import { FaBowlFood, FaBowlRice } from "react-icons/fa6";
import OilsImag from "../../../public/oil.png";
import GrainsImag from "../../../public/wheat-sack.png";
import PastaImag from "../../../public/pasta.png";


export default function SideBarIcons({style, type}:any){
    switch(type){
        case "Grains":
            // return <FaBowlRice style={{...style}} />;
            return <Image src={GrainsImag} alt="icon" width={24} height={24} />;

        case "Cooking Oils":
            // return <FaOilCan style={{...style}} />
            return <Image src={OilsImag} alt="icon" width={24} height={24} />;


        default:
            // return <FaBowlFood style={{...style}} />
            return <Image src={PastaImag} alt="icon" width={24} height={24} />;

    }
}