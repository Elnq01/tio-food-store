'use server'

import mongoose from "mongoose";
import { connect } from "../db/db";
import { revalidatePath } from "next/cache";

// typed data
export interface ProductImage {
  secure_url: string;
  public_id: string;
}

export interface ProductType {
  _id: string;
  productName: string;
  productImages: ProductImage[];
  price: string;
  productCategory: string;
  description: string;
}

// Define schema & model
const productSchema = new mongoose.Schema<ProductType>({
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


const Product = mongoose.models.Product || mongoose.model<ProductType>('Product', productSchema);



export async function createProduct(formData:object) { 
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

// for admin
export async function getProductPaginated(page:number, limit:number){
  try{
    await connect();
    const skip = (page - 1) * limit;
    const ProductItem = await Product.find({}).skip(skip).limit(limit).lean<ProductType & { _id: mongoose.Types.ObjectId }[]>();
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


export async function deleteProduct(id:string) {
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


export async function updateProduct(id:string, product:object) {    
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
export async function retrieveAProduct(id: string) {
  try {
    await connect();

    const product = await Product.findById(id).lean<ProductType & { _id: mongoose.Types.ObjectId }>();
    if (!product) return null;

    const productRetrieved = {
      ...product,
      _id: product._id.toString()
    };

    console.log("Retrieve a Single Status: ", productRetrieved);

    return productRetrieved;

  } catch (err) {
    console.log("Retrieved Single Product Err! ", err);
  }
}



// Home Page Retrieve of Product
export async function getProduct(params:string){
  try{
    await connect();

    let ProductItem;

    if(params == "Hot's Product"){

      ProductItem = await Product.find({}).limit(8).lean<ProductType & { _id: mongoose.Types.ObjectId }[]>();

    } else if(params == "New Product"){

      ProductItem = await Product.find({}).limit(8).lean<ProductType & { _id: mongoose.Types.ObjectId }[]>();

    } else {

      ProductItem = await Product.find({}).limit(8).lean<ProductType & { _id: mongoose.Types.ObjectId }[]>();

    }

      const ProductItemModify = ProductItem.map(product => {
        return {...product, _id:product._id.toString()}
      })

    return ProductItemModify;

  }catch(err){
        console.error("Error fetching paginated products:", err);
  }
}


// getting paginated product for the regular app
export async function getProductPaginatedApp(page: number, limit: number, 
  params: string)
{
  try{    
    await connect();
    const skip = (page - 1) * limit;

    let ProductItem;

    if(params == "Hot's Product"){

      ProductItem = await Product.find({}).skip(skip).limit(limit).lean<Omit<ProductType, '_id'> & { _id: mongoose.Types.ObjectId }[]>();

    } else if(params == "New Product"){

      ProductItem =  await Product.find({}).skip(skip).limit(limit).lean<Omit<ProductType, '_id'> & { _id: mongoose.Types.ObjectId }[]>();

    } else {

      ProductItem = await Product.find({productCategory:params}).skip(skip).limit(limit).lean<Omit<ProductType, '_id'> & { _id: mongoose.Types.ObjectId }[]>();

    }

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



