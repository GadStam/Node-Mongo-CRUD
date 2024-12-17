import mongoose from "mongoose";
import { config } from "dotenv";

config();


const uri = process.env.MONGODB_URI;


export const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conectado a MongoDB");
  } catch (err) {
    console.error("Error al conectar a MongoDB:", err);
    process.exit(1); // Detener la aplicación si la conexión falla
  }
};
