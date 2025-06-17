"use client"

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
        style={{width:'40px', 
            height:'40px', borderRadius:'50%', border:'0px'}}
        onClick={onDecreasehandler}
        disabled={value == 0}
        >-</Button>
    <span>{value}</span>
    <Button 
        style={{background:'red', width:'40px', 
            height:'40px', borderRadius:'50%', border:'0px'}}
        onClick={onIncreasehandler}
        // disabled={value == 0}
        >+</Button>
    </div>
}