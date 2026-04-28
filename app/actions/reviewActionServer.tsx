"use server";

import { Schema, model, models, Types } from "mongoose";
import { connect } from "../db/db";

// ✅ Input type (from client)
export type ReviewInput = {
  name: string;
  time?: string;
  rating: number;
  review: string;
  productId: string; // comes as string
};

// ✅ Schema
const reviewSchema = new Schema(
  {
    name: { type: String, required: true },
    time: { type: String },
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true } // ⭐ optional but useful
);

// ✅ Prevent model overwrite (Next.js hot reload fix)
const Review = models.Review || model("Review", reviewSchema);

// ==============================
// ✅ CREATE REVIEW
// ==============================
export async function CreateReview(review: ReviewInput) {
  try {
    await connect();

    // ✅ Validate ObjectId
    if (!Types.ObjectId.isValid(review.productId)) {
      throw new Error("Invalid productId");
    }

    const reviewToSave = {
      ...review,
      productId: new Types.ObjectId(review.productId),
    };

    const savedReview = await Review.create(reviewToSave);

    console.log("Review saved:", savedReview);

    return JSON.parse(JSON.stringify(savedReview)); // ✅ serialize for client
  } catch (err) {
    console.error("Create Review Error:", err);
    throw err; // ✅ let client handle it
  }
}

// ==============================
// ✅ RETRIEVE REVIEW
// ==============================
export async function RetrieveReview({ _id }: { _id: string }) {
  try {
    await connect();

    // ✅ Validate ID
    if (!Types.ObjectId.isValid(_id)) {
      throw new Error("Invalid review ID");
    }

    const dbReview = await Review.findById(_id).lean();

    console.log("Retrieved Review:", dbReview);

    return dbReview; // already serializable because of .lean()
  } catch (err) {
    console.error("Retrieve Review Error:", err);
    throw err;
  }
}