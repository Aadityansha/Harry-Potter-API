const express = require("express");
const path = require("path");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.use("/", require("../src/routes/app"))
app.use("/api/characters", require("../src/routes/api/characters"));
app.use("/api/spells", require("../src/routes/api/spells"));
app.use("/api/potions", require("../src/routes/api/potions"));

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "pages"));
app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname, "pages/components"));

app.get("*", (req, res) => {
  res.status(404).render("error_page.hbs")
})

app.listen(port, () => {
  console.log(`PotterHead app listening on port ${port}`);
});
