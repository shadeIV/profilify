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
app.get("/view/:profileName", (req, res) => {
    res.render("view.ejs");
});

// Create Route
app.get("/create", (req, res) => {
    res.render("create.ejs");
});

// Handling Post Request From /create 
app.post("/create", (req, res) => {
    const profileName = req.body.profileName;

    res.redirect(`/view/${profileName}`);
});


// <----- Server -----> 


// Starting The Server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});