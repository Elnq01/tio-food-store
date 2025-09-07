import mongoose from "mongoose";

const MONGODB_URI = 
// process.env.NODE_ENV === "development"
  // ? process.env.MONGODB_LOCAL_URI
  // : 
  process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ Please define the MONGODB_URI environment variable inside .env or Vercel settings");
}

export const connect = async () => {
  try {
    // Prevent multiple connections in dev hot-reload
    if (mongoose.connection.readyState === 1) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    await mongoose.connect(MONGODB_URI, {
      dbName: "products", // optional if already in URI
    });

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
};
