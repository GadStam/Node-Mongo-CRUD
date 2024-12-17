const Promise = require("bluebird");
const { MovieModel } = require("../models/database/movie");
const { validateMovie, validatePartialMovie } = require("../schemas/movies");
const axios = require("axios");

class MovieController {
  static async getAll(req, res) {
    const { genero } = req.query;
    const movies = await Promise.resolve(MovieModel.getAll({ genero }));
    res.json(movies);
  }

  static async getById(req, res) {
    const { id } = req.params;
    const movie = await Promise.resolve(MovieModel.getById({ id }));
    if (!movie) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(movie);
  }

  static async create(req, res) {
    const result = validateMovie(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const newMovie = await Promise.resolve(
      MovieModel.create({ input: result.data })
    );
    res.status(201).json(newMovie);
  }

  static async delete(req, res) {
    const { id } = req.params;
    const result = await Promise.resolve(MovieModel.delete({ id }));
    if (result === false) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json({ message: "Movie deleted" });
  }

  static async update(req, res) {
    const { id } = req.params;
    const result = validatePartialMovie(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });
    }
    const updatedMovie = await Promise.resolve(
      MovieModel.update({ id, input: result.data })
    );
    if (updatedMovie === null) {
      return res.status(404).json({ error: "Movie not found" });
    }
    res.json(updatedMovie);
  }

  static async getPokemon(req, res) {
    const { name } = req.params;
    try {
      const pokemon = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      res.json(pokemon.data.types);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = { MovieController };
