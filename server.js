const express= require("express");
const res = require("express/lib/response");
const { parse } = require("request/lib/cookies");
const app= express();

app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })

  app.get('/multiplyTwoNumbers/:first/:second', function(req,res,next){
    var first = parseInt(req.params.first);
    var second = parseInt(req.params.second);
    var product = first * second || null ;
    if(product == null){
      res.json({result:product, statusCode:400}).status(400);
    }
    else{
      res.json({result:product, statusCode:200}).status(200);

    }
  });


const port=8080;
app.listen(port,()=> {
    console.log("Port: "+port);
})