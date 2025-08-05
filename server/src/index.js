import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

let isConnected = false;

async function connectDB() {
  if (isConnected) return;
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw error;
  }
}

// Export a handler for Vercel
export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
      });
    })
    .catch((error) => {
      console.error("❌ Failed to start server:", error);
      process.exit(1);
    });
}









