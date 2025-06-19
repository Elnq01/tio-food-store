"use client"

import { Primary, Seconadry } from "@/public/colors/colos";
import { useState } from "react";
import { Button } from "react-bootstrap";

export default function SpinnerBtn(){
    const [value, SetValue] = useState(0);

    function onIncreasehandler(){
        SetValue(prevState => prevState + 1);
    }

    function onDecreasehandler(){
        SetValue(prevState => prevState - 1);
    }

    return <div style={{
        display:'flex', flexDirection:'row', 
        columnGap:'10px', justifyContent:'center', alignItems:'center'}}>
    <Button 
        style={{background:"#313133", width:'35px', 
            height:'35px', borderRadius:'50%', border:'0px'}}
        onClick={onDecreasehandler}
        disabled={value == 0}
        >-</Button>
    <span>{value}</span>
    <Button 
        style={{background:Seconadry, width:'35px', 
            height:'35px', borderRadius:'50%', border:'0px'}}
        onClick={onIncreasehandler}
        // disabled={value == 0}
        >+</Button>
    </div>
}