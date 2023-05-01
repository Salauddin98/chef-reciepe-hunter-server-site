const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const chef = require("./Data/chef.json");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/chef", (req, res) => {
  res.send(chef);
});
app.get("/chef/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const selectedChef = chef.find((n) => parseInt(n.id) === id);
  res.send(selectedChef);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
