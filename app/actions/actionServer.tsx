'use server'

import mongoose from "mongoose";
import { connect } from "../db/db";

// Define schema & model
const productSchema = new mongoose.Schema({
  productName: String,
  productImages: [String], // array of strings
  price: Number,
  productCategory: String,
  description: String,
});


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);



export async function createProduct(formData) {    
  try{
    await connect();
    const product = new Product(formData);
    await product.save();
    console.log('Product saved:', product);
  }catch(err){
    console.log("Creation Product!");
  }
}


export async function getProductPaginated(page, limit){
  try{
    await connect();
    const skip = (page - 1) * limit;
    const ProductItem = await Product.find({}).skip(skip).limit(limit).lean();
    const total = await Product.countDocuments(); // Get total count for pagination
    // console.log("What i am getting 2: ", ProductItem);

    return {
            products: ProductItem, // Serialize for client-side
            // products: JSON.parse(JSON.stringify(ProductItem)), // Serialize for client-side
            total,
        };
  }catch(err){
        console.error("Error fetching paginated products:", err);
  }
}


export async function updateProduct(id) {
  console.log("Update Product!");
}



