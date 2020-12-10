const express = require("express");
const exphbs = require("express-handlebars");

const handlebars = require("handlebars");

//const db = require("./models");
const app = express();

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Handle POST body

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// statis directory to be served
app.use(express.static("public"));

// ROUTES

// add routes here

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

// db.sequelize.sync({ force: true }).then(() => {
//db.sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
//});
