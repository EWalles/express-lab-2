// require packages/dependencies
const express = require("express");

// Initialize the express application
const app = express();

//port
const port = 3000;

// define routes req=request res=response

app.get("/", (req, res) => {
  console.log("listening")
  res.send("99 Bottles of beer on the wall")
})
app.get("/:numbers_of_bottle", (req, res) => {
    console.log(req.params)
    res.send("take one down")
  });