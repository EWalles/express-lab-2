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

let ball = [
  "It is certain", "It is decidedly so", 
  "Without a doubt", "Yes definitely",
  "You may rely on it", "As I see it yes", 
  "Most likely", "Outlook good",
  "Yes", "Signs point to yes", 
  "Reply hazy try again", "Ask again later",
  "Better not tell you now", "Cannot predict now", 
  "Concentrate and ask again","Don't count on it", 
  "My reply is no", "My sources say no",
  "Outlook not so good", "Very doubtful"]

  let answers = ball[Math.floor(Math.random()*ball.length)];

app.get("/magic/:answer", (req, res) => 
{res.send(<h1>${`answers`}</h1>)});



// tell the app to listen on port...
app.listen(port, function(){
    console.log("listening")
});