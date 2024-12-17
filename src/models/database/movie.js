import mongoose from "mongoose";




const movieSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: [String], required: true },
  año: { type: Number, required: true, min: 1895, max: 2024 },
  director: { type: String, required: true },
});

export class MovieModel {
  static async getAll({ genero }) {
    const filter = genero ? { genero: { $in: [genero] } } : {};
    return await mongoose.model("Movie").find(filter);
  }

  static async getById({ id }) {
    try{
        return await mongoose.model("Movie").findById(id);
    }catch(err){
        return null;
    }
  }

  static async create({ input }) {
    const Movie = mongoose.model("Movie"); // Get the model directly
    const newMovie = new Movie(input);
    return await newMovie.save();
  }

  static async delete({ id }) {
    const result = await mongoose.model("Movie").findByIdAndDelete(id);
    return result !== null;
  }

  static async update({ id, input }) {
    return await mongoose
      .model("Movie")
      .findByIdAndUpdate(id, input, { new: true });
  }
}

// Crear el modelo basado en el esquema
mongoose.model("Movie", movieSchema);






