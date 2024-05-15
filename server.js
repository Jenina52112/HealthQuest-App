const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Create an instance of express-handlebars
const hbs = exphbs.create({ defaultLayout: "main" });

// Configure Handlebars.js as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Define routes
app.get("/login", (req, res) => {
  res.render("login");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
