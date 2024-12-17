const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: [String], required: true },
  año: { type: Number, required: true, min: 1895, max: 2024 },
  director: { type: String, required: true },
});

const Movie = mongoose.model("Movie", movieSchema);

class MovieModel {
  static async getAll({ genero }) {
    const filter = genero ? { genero: { $in: [genero] } } : {};
    return await Movie.find(filter);
  }

  static async getById({ id }) {
    try {
      return await Movie.findById(id);
    } catch (err) {
      return null;
    }
  }

  static async create({ input }) {
    return await Movie.create(input);
  }

  static async delete({ id }) {
    try {
      const result = await Movie.findByIdAndDelete(id);
      return result !== null;
    } catch (err) {
      return false;
    }
  }

  static async update({ id, input }) {
    try {
      return await Movie.findByIdAndUpdate(id, input, { new: true }); // Devuelve el documento actualizado
    } catch (err) {
      return null;
    }
  }
}

module.exports = { MovieModel };
