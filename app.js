const express = require("express");

const { pingApi } = require("./controllers/api.controller");
const { getCategories } = require("./controllers/getCategories.controller");

const app = express();

app.get("/api", pingApi);

app.get("/api/categories", getCategories);

app.all("/*", (req, res) => {
  res.status(404).send({ msg: "Page/File Not Found" });
});

module.exports = app;
