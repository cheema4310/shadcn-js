import mongoose from 'mongoose';

export async function dbConnect() {
  try {
    await mongoose.connect(String(process.env.MONGO_URI));
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
