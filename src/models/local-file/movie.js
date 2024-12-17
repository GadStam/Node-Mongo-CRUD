import movies from "../../../movies.json" with { type: "json" };
import { randomUUID } from "node:crypto";

export class MovieModel {
static async getAll({ genero }) {
    if (genero) {
        return movies.filter((movie) => movie.genero.some((g) => g.toLowerCase() === genero.toLowerCase())
    );
  }
  return movies;
}

static async getById({id}) {
    return movies.find((movie) => movie.id === id);
}

static async create({input}) {
    const newMovie = { 
        id: randomUUID(),
         ...input
        };
  movies.push(newMovie);
  return newMovie;
}

static async delete({id}){
     const index = movies.findIndex(movie => movie.id === id);
     if(index === -1) return false;
     movies.splice(index, 1);
    return true;

}

static async update({id, input}){
    const index = movies.findIndex(movie => movie.id === id);
    if(index === -1) return false;
    const updatedMovie = {...movies[index], ...input};
    movies[index] = updatedMovie;
    return updatedMovie;
}
}