const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/home", (req, res) => {
  return res.status(400).send(require("./home"));
});

app.get("/likes", (req, res) => {
  return res.status(400).send(require("./likes"));
});

app.get("/profile", (req, res) => {
  return res.status(400).send(require("./profile"));
});

app.get("/search", (req, res) => {
  return res.status(400).send(require("./search"));
});

app.listen(3333, () => {
  console.log(`listening on port ${3333}`);
});
