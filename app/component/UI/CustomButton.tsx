"use client"


import { Spinner} from 'react-bootstrap';
import { Primary } from '@/public/colors/colos';
import { PiCaretRight } from 'react-icons/pi';
import CustomButtomStyle from './CustomButtomStyle.module.css'

type CustomDataType = {
  titled?:string,
  disable?:boolean,
  color?:string,
  isLoading?:boolean,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function CustomButton({titled = "Shop Now", disable, color, isLoading=false, onClick}:CustomDataType){
    return <button 
    disabled={disable}
    onClick={onClick}
    className={CustomButtomStyle.Container}
    style={{
      background:color
      }}>
      {isLoading?<Spinner animation="border" variant="light" size="sm" />:
      <>
        <p>{titled}</p>
        <PiCaretRight size={15} /> 
      </>}
  </button>
}