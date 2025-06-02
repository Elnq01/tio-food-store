"use client"


import { Button} from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { Primary, OffWhite } from '@/public/colors/colos';


export default function customButton({titled = "Shop Now", color = Primary, onClick}:any){
    return <Button 
    onClick={onClick}
    style={{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      textAlign:'center',
      columnGap:'10px',
      color:OffWhite,
      background:color,
      marginTop:'20px',
      marginBottom:'20px',
      border:'none'
      }}>
      <p>{titled}</p>
      <FaGreaterThan size={10} /> 
  </Button>
}