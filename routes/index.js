const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({
    MainMessage: "Hello World",
  });
});

module.exports = router;
