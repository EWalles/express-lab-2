// require packages/dependencies
const express = require("express");

// Initialize the express application
const app = express();

//port
const port = 3000;

// define routes req=request res=response

app.get("/hello/:firstname/:lastname", (req, res) => {
  console.log(req.params)
  res.send("hello " + req.params.firstname + " " + req.params.lastname)
})

// tell the app to listen on port...
app.listen(port, function(){
    console.log("listening")
});