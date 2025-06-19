import { Form } from "react-bootstrap";

export default function DeliveryLocationFormControl({name, value, onChange}){
    switch(name){
        case "state":
            return <Form.Select 
                aria-label="Default select example" 
                className='mb-3'
                name={name}
                // disabled={disabled}
                value={value}
                onChange={onChange}
                >
                <option>Choose a State</option>
                <option value="Lagos">Lagos</option>
                {/* <option value="2">Abuja</option> */}
                {/* <option value="3">Ogun</option> */}
            </Form.Select>
        case "LGA":
            return <Form.Select 
                    aria-label="Default select example"
                    className='mb-3'
                    name={name}
                    // disabled={disabled}
                    value={value}
                    onChange={onChange}>
                <option>Choose a local Government</option>
                <option value="Lagos MainLand">Lagos MainLand</option>
                <option value="Lagos Island">Apapa</option>
                <option value="Epe">Epe</option>
            </Form.Select>
        default:
            return <Form.Group className="mb-3" controlId="formBasicEmail">
        {/* <Form.Label>{label}</Form.Label> */}
        <Form.Control 
            value={value} 
            name={name} 
            // disabled={disabled}
            type="text" 
            onChange={onChange} 
            placeholder={name}
            // placeholder={placeholder}
             />
        </Form.Group>
    }
}