import mongoose from "mongoose";
import { config } from "dotenv";
import Promise from "bluebird";
config();


const uri = process.env.MONGODB_URI;


export const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1); 
  }
};
