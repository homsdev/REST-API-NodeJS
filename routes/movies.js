const { Router } = require("express");
const { moviesController } = require("../controllers/index");
const router = Router();

router.get("/", (req, res) => {
  res.json(moviesController.getAllMovies());
});

module.exports = router;
