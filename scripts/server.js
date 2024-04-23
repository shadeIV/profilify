// Importing Express
const express = require("express");
const app = express();

// Starting The Server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on localhost:${port}`);
});