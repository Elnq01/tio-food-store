"use client"


import { Button, Spinner} from 'react-bootstrap';
import { Primary, OffWhite } from '@/public/colors/colos';
import { PiCaretRight } from 'react-icons/pi';


export default function CustomButton({titled = "Shop Now", color = Primary, isLoading=false, onClick}:any){
    return <Button 
    onClick={onClick}
    style={{
      display:'flex', 
      flexDirection:'row', 
      alignItems:'center', 
      textAlign:'center',
      columnGap:'12px',
      color:OffWhite,
      background:color,
      marginTop:'20px',
      marginBottom:'20px',
      border:'none'
      }}>
      {isLoading?<Spinner animation="border" variant="light" size="sm" />:
      <>
        <p>{titled}</p>
        <PiCaretRight size={15} /> 
      </>}
  </Button>
}