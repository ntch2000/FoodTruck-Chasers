const express = require("express");
const exphbs = require("express-handlebars");

const handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const db = require("./models");
const app = express();

// adding require for the truck controllers
const truckControllers = require("./controllers/truckController");

const PORT = process.env.PORT || 8080;

// MIDDLEWARE
// Handle POST body

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static directory to be served
app.use(express.static("public"));

// Configure express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);

app.set("view engine", "handlebars");

app.use(truckControllers);
// ROUTES

// add routes here
// View Route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/createTruck", (req, res) => {
  res.render("createTruck");
});

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// API Routes
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
});

// db.sequelize.sync({ force: true }).then(() => {
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
