import { CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';
import { Form } from 'react-bootstrap';

export default function UploadCloudinary(props){
    const [resource, setResource] = useState();
    
    return <CldUploadWidget
        uploadPreset="<Your Upload Preset>"
        onSuccess={(result, { widget }) => {
            setResource(result?.info);  // { public_id, secure_url, etc }
        }}
        onQueuesEnd={(result, { widget }) => {
            widget.close();
        }}
        >
        {({ open }) => {
            function handleOnClick() {
            setResource(undefined);
            open();
            }
            return (
                <Form.Control 
                    value={props.value} 
                    name={props.name} 
                    accept="image/*"
                    onChange={props.onChange} type="file" multiple />);
        }}
    </CldUploadWidget>
}