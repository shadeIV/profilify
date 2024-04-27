// <----- Imports ----->


// Importing Express
const express = require("express");
const app = express();

// Body Parser
const bodyParser = require("body-parser");


// <----- Config -----> 


// Body Parser
app.use(bodyParser.urlencoded({ extended: false }))

// Public Files
app.use(express.static("public"));

// View Engine
app.set("view engine", "ejs");


// <----- Routers ----->


// Home Route
app.get("/home", (req, res) => {
    res.render("home.ejs");
});

// View Route
app.get("/view/:profileId", (req, res) => {
    res.render("view.ejs");
});

// Edit Route
app.get("/edit/:profileId", (req, res) => {
    res.render("edit.ejs");
});

// Create Route
app.get("/create", (req, res) => {
    res.render("create.ejs");
});


// <----- Server -----> 


// Starting The Server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});