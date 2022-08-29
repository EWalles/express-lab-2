// require packages/dependencies
const express = require("express");

// Initialize the express application
const app = express();

//port
const port = 3000;

// define routes req=request res=response

app.get("/greeting/:firstname/:lastname", (req, res) => {
  console.log(req.params)
  res.send("Greetings " + req.params.firstname + " " + req.params.lastname)
})

app.get("/tip/:total/:tipPrecentage", (req, res) => {
  console.log(req.params)
  res.send("Your tip " + (req.params.total) * (req.params.tipPrecentage /100))
});

// tell the app to listen on port...
app.listen(port, function(){
    console.log("listening")
});