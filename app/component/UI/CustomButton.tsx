"use client"


import { Button} from 'react-bootstrap';
import { FaGreaterThan } from 'react-icons/fa';
import { Primary, OffWhite } from '@/public/colors/colos';


export default function customButton(){
    return <Button 
    style={{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      textAlign:'center',
      columnGap:'10px',
      color:OffWhite,
      background:Primary,
      marginTop:'20px',
      marginBottom:'20px',
      border:'none'
      }}>
      <p>Shop Now</p>
      <FaGreaterThan size={10} /> 
  </Button>
}