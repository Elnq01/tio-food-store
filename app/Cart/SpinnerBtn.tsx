"use client"

import { Seconadry } from "@/public/colors/colos";
import { Button } from "react-bootstrap";
import { useStore } from "../store/cart";

export default function SpinnerBtn({id, quantity}:{id:string, quantity:number}){

    // getting slice of the state
    const increasProductQty = useStore((state) => state.increaseItemQuantity);
    const decreasProductQty = useStore((state) => state.decreaseItemQuantity);

    return <div style={{
        display:'flex', flexDirection:'row', 
        columnGap:'10px', justifyContent:'center', alignItems:'center'}}>
    <Button 
        style={{background:"#313133", width:'35px', 
            height:'35px', borderRadius:'50%', border:'0px'}}
        onClick={() => {
            decreasProductQty(id)
        }}
        disabled={quantity == 0}
        >-</Button>
    <span>{quantity}</span>
    <Button 
        style={{background:Seconadry, width:'35px', 
            height:'35px', borderRadius:'50%', border:'0px'}}
        onClick={() => {
            increasProductQty(id)
        }}
        // disabled={value == 0}
        >+</Button>
    </div>
}