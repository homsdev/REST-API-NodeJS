const express = require("express");
const morgan = require("morgan");

const server = require("./config/default.json").server;
const app = express();

// Middlewares setup
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || server.port, () => {
  console.log(`Server on port ${server.port} with name: ${server.name}`);
});
