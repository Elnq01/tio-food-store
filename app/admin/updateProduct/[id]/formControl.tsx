
import { Form, Spinner } from "react-bootstrap";
import { FaMarkdown } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Primary } from "@/public/colors/colos";
import Image from "next/image";
import { deleteImgCloudinary } from "@/app/actions/cloudinaryActionServer";

export default function FormControlElement({label, disabled=true, value, name, placeholder, isLoading, success, onChange, isUpdate, productImages}){

    switch(label){
        case "Product Name":
            return <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        value={value} 
                        name={name} 
                        disabled={disabled}
                        type="text" 
                        onChange={onChange} 
                        placeholder={placeholder} />
                </Form.Group>

        case "Product Images":
            return <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label 
                    style={{display:'flex', flexDirection:'row', alignItems:'center', columnGap:'5px'}}>
                        <span>{label}</span>
                        {isLoading?<Spinner animation="border" variant="success" size="sm" />:null}
                        {success?<IoIosCheckmarkCircle color={Primary} />:null}
                    </Form.Label>
                    <Form.Control 
                        // value={props.value} 
                        name={name} 
                        disabled={disabled}
                        accept="image/*"
                        onChange={onChange} type="file" multiple />
                    <Form.Text>{placeholder}</Form.Text>
                </Form.Group>

        case "Price":
            return <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        name={name}
                        disabled={disabled}
                        value={value}
                        style={{ appearance: "none", margin: "0px"}}
                        type="number" 
                        onChange={onChange}
                        placeholder={placeholder}
                        />
                </Form.Group>

        case "Product Category":
            return <Form.Group className="mb-3">
                    <Form.Label>{label}</Form.Label>
                        <Form.Select 
                            name={name}
                            disabled={disabled}
                            value={value}
                            onChange={onChange}
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
                    <Form.Label>{label}</Form.Label>
                    <Form.Control 
                        disabled={disabled}
                        value={value} 
                        name={name} 
                        onChange={onChange} as="textarea" rows={3} />
                </Form.Group>
    }
                
}