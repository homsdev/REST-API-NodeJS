const { Router } = require("express");
const { moviesController } = require("../controllers/index");
const router = Router();

router.get("/", (req, res) => {
  res.json(moviesController.getAllMovies());
});

router.post("/", (req, res) => {
  let movie = req.body;
  res.json(moviesController.addNewMovie(movie));
});

router.put("/:id", (req, res) => {
  let id = req.params.id;
  let movie = req.body;
  res.json(moviesController.updateMovieInfo(id, movie));
});

module.exports = router;
