"use server"


// models/Review.ts
import { Schema, model, models } from "mongoose";
import { connect } from "../db/db";

import { Types } from "mongoose";

export interface ReviewType {
  name: string;
  time: string;
  rating: number;
  review: string;
  productId?: Types.ObjectId; // <-- correct type for Mongoose ObjectId
}


const reviewSchema = new Schema({
  name: { type: String, required: true },
  time: { type: String },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
  productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true }
});

const Review = models.Review || model('Review', reviewSchema);



export async function CreateReview(review: ReviewType) {
  try {
    await connect();
    const existingReview = await Review.create(review);
    console.log("Review to be saved: ", existingReview)

  } catch (err) {
    console.log("Creation Review! ", err);
  }
}




export async function RetrieveReview({_id}:{_id:string}) {
    try{
        await connect();
        const dbReview = await Review.findOne({ _id:_id });
        
        console.log("Retrieve a Review: ", dbReview)
        return dbReview;

    }catch(err){
        console.log("retrieve Review Error! ", err);
    }
    
} 