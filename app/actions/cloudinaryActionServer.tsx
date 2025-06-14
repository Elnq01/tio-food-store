"use server"
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'djn9lztmo',
  api_key: '621218946894317',
  api_secret: 'ziqLRFM5hKQ1QtfV24Ei0q9it9I', // DO NOT expose this to frontend
});



// export async function updateImgCloudinary(files){
//     const uploadedImageUrls = [];
    
//     for (let file of files) {
//         // const url = await uploadToCloudinary(file);
//         console.log("Files upload : ", file);

//         cloudinary.uploader.unsigned_upload(file, "product").then((imageStatus) => {
//             // uploadedImageUrls.push(url);
//             console.log("The image Uploader: ", imageStatus);
//         }).catch((err) => {
//             console.log("Upload Error: ", err);
//         });
//     };
// }


export async function deleteImgCloudinary(id){
        console.log("The image Deleted id: ", id);
    cloudinary.uploader.destroy(id).then((imageStatus) => {
        console.log("The image Deleted: ", imageStatus);
    }).catch((err) => {
            console.log("Delete cloudinary Error: ", err);
    });;
}