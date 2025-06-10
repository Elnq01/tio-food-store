
import { Form, Spinner } from "react-bootstrap";
import UploadCloudinary from "./uploadCloudinaryComponent";
import { FaMarkdown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Primary } from "@/public/colors/colos";

export default function FormControlElement(props){

    switch(props.label){
        case "Product Name":
            return <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control 
                        value={props.value} 
                        name={props.name} 
                        type="text" 
                        onChange={props.onChange} 
                        placeholder={props.placeholder} />
                </Form.Group>

        case "Product Images":
            return <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label 
                    style={{display:'flex', flexDirection:'row', alignItems:'center', columnGap:'5px'}}>
                        <span>{props.label}</span>
                        {props.isLoading?<Spinner animation="border" variant="success" size="sm" />:null}
                        {props.success?<IoIosCheckmarkCircle color={Primary} />:null}
                    </Form.Label>
                    <Form.Control 
                        // value={props.value} 
                        name={props.name} 
                        accept="image/*"
                        onChange={props.onChange} type="file" multiple />
                    <Form.Text>{props.placeholder}</Form.Text>
                </Form.Group>

        case "Price":
            return <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control 
                        name={props.name}
                        value={props.value}
                        style={{ appearance: "none", margin: "0px"}}
                        type="number" 
                        onChange={props.onChange}
                        placeholder={props.placeholder}
                        />
                </Form.Group>

        case "Product Category":
            return <Form.Group className="mb-3">
                    <Form.Label>{props.label}</Form.Label>
                        <Form.Select 
                            name={props.name}
                            value={props.value}
                            onChange={props.onChange}
                            aria-label="Default select example">
                            <option>Choose a category</option>
                            <option value="Instant Foods / Noodles">	Instant Foods / Noodles </option>
                            <option value="Pasta & Noodles">	Pasta & Noodles </option>
                            <option value="Grains & Staples"> Grains & Staples </option>
                            <option value="Cooking Oils"> Cooking Oils </option>
                        </Form.Select>
                </Form.Group>

        default:
            return <Form.Group className="mb-3"  controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{props.label}</Form.Label>
                    <Form.Control 
                        value={props.value} 
                        name={props.name} 
                        onChange={props.onChange} as="textarea" rows={3} />
                </Form.Group>
    }
                
}