"use server"


// models/User.ts
import { Schema, model, models } from "mongoose";
import { connect } from "../db/db";

interface UserType {
    name:string,
    email:string, 
    role:string
}

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

const User = models.User || model("User", userSchema);






export async function CreateUser(user:UserType) {
    try{
        await connect();

        let existingUser = await User.findOne({ email: user.email });
        
        if (!existingUser) {
            existingUser = await User.create({
                name: user.name,
                email: user.email,
                role: user.email === "belewufataiondworld@gmail.com" ? "admin" : "user",
            });
        }
        
        console.log("SignIn or SignUp: ", existingUser)
        // return existingUser;

    }catch(err){
        console.log("Creation User! ", err);
    }
    
} 



export async function RetrieveUser({email}:{email:string}) {
    try{
        await connect();
        const dbUser = await User.findOne({ email:email });
        
        console.log("Retrieve a User: ", dbUser)
        return dbUser;

    }catch(err){
        console.log("retrieve User Error! ", err);
    }
    
} 