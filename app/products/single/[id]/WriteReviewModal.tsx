import { OffWhite, Primary } from '@/public/colors/colos';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { FaPenClip } from 'react-icons/fa6';
import Rating from '@mui/material/Rating';
import { useState } from 'react';
import { CreateReview } from '@/app/actions/reviewActionServer';



function WriteReviewModal({handleClose, show, handleShow, productId}) {

    const [review, setReview] = useState(0);
    const [comment, setComment] = useState("");

    const reviewHandler = (e) => {
        // console.log(e.target.value)
        setReview(e.target.value)
    }

    const commentHandler = (e) => {
        // console.log(e.target.value)
        setComment(e.target.value) 
    }

    const handleSubmit = async () => {
        const reviewTobeSubmitted = {
            name:"Dami",
            time:"2 hours",
            rating:review,
            review: comment,
            productId:productId
        }
        const submitted = await CreateReview(reviewTobeSubmitted) 
        setComment("")
        setReview(0)
    }

  return (
    <>
      <Button 
        // disabled={disable}
        onClick={handleShow}
        style={{
            display:'flex', 
            flexDirection:'row', 
            alignItems:'center', 
            textAlign:'center',
            columnGap:'12px',
            color:OffWhite,
            background:Primary,
            marginTop:'20px',
            marginBottom:'20px',
            border:'none'
            }}>
            <>
            <FaPenClip size={15} />
            <p>write a review</p>
            </>
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Rating onChange={reviewHandler} value={review} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>comment</Form.Label>
              <Form.Control as="textarea" value={comment} onChange={commentHandler} rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            handleSubmit()
            handleClose()
          }}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WriteReviewModal;