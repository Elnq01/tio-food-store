import { Primary } from "@/public/colors/colos";
import { Button } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

export default function TableButton({titled, onClick}:{titled:string, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;}){
    return <Button 
               onClick={onClick}
                style={{
                  display:'flex', 
                  flexDirection:'row', 
                  alignItems:'center', 
                  textAlign:'center',
                  columnGap:'10px',
                  color:Primary,
                  background:"rgb(214, 243, 216)",
                  border:'none'
                  }}>
                  <FaTrash size={20} /> 
                  <p>{titled}</p>
              </Button>
}