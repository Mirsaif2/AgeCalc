//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(express.static("public"));



app.get("/", function(req, res){
  res.render("home");
});


app.post('/',function(req,res){
  // let birth = (req.body.birthdate).toString();
  // console.log(birth);
  var d1 = (req.body.date);
  var m1 = (req.body.month);
  var y1= (req.body.year);
  console.log(d1);
  console.log(m1);
  console.log(y1);
  // var m1 = getElementById('month').value;
  // var y1 = document.getElementById('year').value;
  //the actual date
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if(d1 > d2){
   d2 = d2 + month[m2 - 1];
   m2 = m2 - 1;
  }
  if(m1 > m2){
   m2 = m2 + 12;
   y2 = y2 - 1;
  }
  var d = d2- d1;
  var m = m2-m1;
  var y = y2- y1
  
  console.log("your age is " + y + " Years " + m + " months " + d + " days")
  var age= "your age is " + y + " Years " + m + " months " + d + " days";
  res.render("age",{age : age});

})







app.listen( 3000, function() {
  console.log("Server started on port 3000");
});
