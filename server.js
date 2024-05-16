const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

// Create an instance of express-handlebars with default settings
const hbs = exphbs.create({
  defaultLayout: "main",
});

// Set Handlebars.js as the template engine
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Serve static files from the public directory
app.use(express.static("public"));

// Define routes
app.get("/login", (req, res) => {
  res.render("login");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
