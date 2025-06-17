import Form from 'react-bootstrap/Form';

export default function DeliveryLocation() {
  return (<>
    <Form.Select aria-label="Default select example" className='mb-3'>
      <option>Choose a State</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    <Form.Select aria-label="Default select example">
      <option>Choose a local Government</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
    </>
  );
}