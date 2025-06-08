'use server'

import mongoose from "mongoose";
import { connect } from "../db/db";

// Define schema & model
const productSchema = new mongoose.Schema({
  productName: String,
//   productImages: [String], // array of strings
  price: Number,
  productCategory: String,
  description: String,
});


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);



export async function createProduct(formData:FormData) {    
  await connect();
  const productData = {
    productName: formData.get('productName'),
    // productImages: formData.getAll('productImages'), // use getAll if multiple images
    price: parseFloat(formData.get('price')),
    productCategory: formData.get('productCategory'),
    description: formData.get('description'),
  };

  const product = new Product(productData);
  await product.save();

  console.log('Product saved:', product);
}



