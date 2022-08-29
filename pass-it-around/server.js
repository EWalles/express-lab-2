// require packages/dependencies
const express = require("express");

// Initialize the express application
const app = express();

//port
const port = 3000;

// define routes req=request res=response

app.get("/", function(req,res){
    res.redirect('/99');
  });
  
  app.get("/:numberOfBottles?", function( req, res ){
    var numberOfBottles = req.params.numberOfBottles || 99;
    var next = numberOfBottles - 1;
    if (numberOfBottles > 1){
      res.send(numberOfBottles + " bottles of beer on the wall <a href='/" + next + "'>Take one down pass it around");
    }
    else{
      res.send("1 bottle of beer on the wall <a href='/'>Start Over</a>");
    }
  });