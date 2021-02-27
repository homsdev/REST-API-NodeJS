const express = require("express");
const morgan = require("morgan");

const server = require("./config/default.json").server;
const app = express();

app.set("json spaces", 4);

// Middlewares setup
app.use(morgan("combined"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use(require("./routes/index"));
app.use("/api/movies", require("./routes/movies"));
app.listen(process.env.PORT || server.port, () => {
  console.log(`Server on port ${server.port} with name: ${server.name}`);
});
