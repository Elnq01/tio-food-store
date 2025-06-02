import { FaOilCan } from "react-icons/fa";
import { FaBowlFood, FaBowlRice } from "react-icons/fa6"

export default function SideBarIcons({style, type}:any){
    switch(type){
        case "Grains":
            return <FaBowlRice style={{...style}} />;

        case "Cooking Oils":
            return <FaOilCan style={{...style}} />

        default:
            return <FaBowlFood style={{...style}} />
    }
}