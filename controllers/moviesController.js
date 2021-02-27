const movies = require("../model/movies.json");

function getAllMovies() {
  return movies;
}

function addNewMovie(movie) {
  movie.id = movies.length + 1;
  movies.push(movie);
  return movies;
}

function updateMovieInfo(MovieID, movieUpdated) {
  movieToUpdate = movies.forEach((movie) => {
    if (movie.id == MovieID) {
      movie.title = movieUpdated.title;
      movie.director = movieUpdated.director;
      movie.year = movieUpdated.year;
      movie.rating = movieUpdated.rating;
    }
  });
  return movies;
}

function deleteMovie() {
  //Deleting movie code
}

module.exports = {
  getAllMovies,
  addNewMovie,
  updateMovieInfo,
  deleteMovie,
};
