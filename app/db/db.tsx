import mongoose from 'mongoose';

const uri =
  process.env.NODE_ENV === 'development'
    ? process.env.MONGODB_LOCAL_URI
    : process.env.MONGODB_URI;

export const connect = async () => {
  try {
    await mongoose.connect(uri as string, {
      dbName: 'products', // optional if already in URI
    });
    console.log(' Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};
