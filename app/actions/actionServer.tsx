'use server'

import mongoose from "mongoose";
import { connect } from "../db/db";
import { revalidatePath } from "next/cache";

// Define schema & model
const productSchema = new mongoose.Schema({
  productName: String,
  productImages: [{
    secure_url:{type:String, required:true}, 
    public_id:{type:String, required:true},    
    _id: false
  }], // array of strings
  price: Number,
  productCategory: String,
  description: String,
});


const Product = mongoose.models.Product || mongoose.model('Product', productSchema);



export async function createProduct(formData) { 
  console.log("Savi product: ", formData)   
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
    const ProductItemModify = ProductItem.map(product => {
      return {...product, _id:product._id.toString()}
    })

    return {
            products:ProductItemModify, 
            total,
        };
  }catch(err){
        console.error("Error fetching paginated products:", err);
  }
}


export async function deleteProduct(id) {
    try{      
      await connect();
      // console.log("Delete ID: ", typeof id );
      const deleteStatus = await Product.findByIdAndDelete(id);
      // console.log("Delete Status: ", deleteStatus);
      revalidatePath("/admin/products");

    }catch(err){
      console.log("Deleted! ", err)
    }
}


export async function updateProduct(id, product) {    
  try{      
      await connect();
      console.log("What is the ID: ", id);
      console.log("What is the ID product: ", product);
      // const objectId = new mongoose.Types.ObjectId(id);
          // Validate ID format
      if (!mongoose.isValidObjectId(id)) {
        throw new Error("Invalid product ID format.");
      }

      const updateStatus = await Product.findByIdAndUpdate(id, { $set: product }, { new: true, runValidators: true });
      // const updateStatus = await Product.findByIdAndUpdate(id, product);
      // { _id: 24601 }
      // console.log("Update Status: ", id, product);
      console.log("Update Status 1: ", updateStatus);
      // revalidatePath("/admin/products");

    }catch(err){
      console.log("Update Product! ", err)
    }
}


// Retrieve a product
export async function retrieveAProduct(id) {    
  try{      
      await connect();
      // console.log("Update ID: ", id );
      const productRetrieved = await Product.findById(id).lean()
      .then(product => ({...product, _id:product._id.toString()}));
      console.log("Retrieve a Single Status: ", productRetrieved);   

    return productRetrieved;

    }catch(err){
      console.log("Update Product! ", err)
    }
}



