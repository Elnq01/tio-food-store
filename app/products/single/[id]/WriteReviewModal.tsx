"use client";

import { useState } from "react";
import { OffWhite, Primary } from "@/public/colors/colos";
// import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { FaPenClip } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { CreateReview } from "@/app/actions/reviewActionServer";

type WriteReviewModalProps = {
  handleClose: () => void;
  handleShow: () => void;
  show: boolean;
  productId: string; // change to number if needed
};

function WriteReviewModal({
  handleClose,
  show,
  handleShow,
  productId,
}: WriteReviewModalProps) {
  const [review, setReview] = useState<number | null>(0);
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Correct MUI Rating handler
  const reviewHandler = (
    event: React.SyntheticEvent,
    value: number | null
  ) => {
    setReview(value);
  };

  // ✅ Proper typing
  const commentHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setComment(e.target.value);
  };

  const handleSubmit = async () => {
    if (!review || !comment.trim()) return;

    const reviewTobeSubmitted = {
      name: "Dami",
      time: "2 hours",
      rating: review,
      review: comment.trim(),
      productId,
    };

    try {
      setLoading(true);

      await CreateReview(reviewTobeSubmitted);

      // reset form
      setComment("");
      setReview(0);

      handleClose();
    } catch (error) {
      console.error("Failed to submit review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleShow}
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: "12px",
          color: OffWhite,
          background: Primary,
          marginTop: "20px",
          marginBottom: "20px",
          border: "none",
        }}
      >
        <FaPenClip size={15} />
        <p style={{ margin: 0 }}>write a review</p>
      </button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Write a Review</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Rating onChange={reviewHandler} value={review} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comment}
                onChange={commentHandler}
                placeholder="Write your review..."
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <button 
          // variant="secondary" 
          onClick={handleClose} disabled={loading}>
            Close
          </button>

          <button
            // variant="primary"
            onClick={handleSubmit}
            disabled={loading || !review || !comment.trim()}
          >
            {loading ? "Submitting..." : "Save Changes"}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default WriteReviewModal;