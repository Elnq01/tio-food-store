"use server"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET, // DO NOT expose this to frontend
});



export async function deleteImgCloudinary(id:string){
    cloudinary.uploader.destroy(id).then((imageStatus) => {
        console.log("The image Deleted: ", imageStatus);
    }).catch((err) => {
            console.log("Delete cloudinary Error: ", err);
    });;
}