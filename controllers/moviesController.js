const movies = require("../model/movies.json");

function getAllMovies() {
  return movies;
}

module.exports = {
  getAllMovies,
};
