import mongoose, { ConnectOptions } from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const mongoURI: string | undefined = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error("MONGODB_URI is not defined in environment variables.");
    }

    await mongoose.connect(mongoURI);
    console.log("Connected to database");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
};
