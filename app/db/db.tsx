import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/products'; // change this

// Simple connection function
export async function connect() {
  if (mongoose.connection.readyState === 1) return; // already connected
  await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
}

