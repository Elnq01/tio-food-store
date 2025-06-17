import { Primary } from "@/public/colors/colos";
import { Button } from "react-bootstrap";

export default function TableButton({titled, onClick}){
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
                  {/* <FaCartP size={20} />  */}
                  <p>{titled}</p>
              </Button>
}