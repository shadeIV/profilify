// Importing Express
const express = require("express");
const app = express();

// Public Files
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");

// Create Route
app.get("/create", (req, res) => {
    res.render("create.ejs");
});

// Starting The Server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});