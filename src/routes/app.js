const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index.hbs");
});

router.get("/docs", (req, res) => {
  res.render("docs.hbs");
});

module.exports = router