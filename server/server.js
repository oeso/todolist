var express = require("express");
var app = express();

app.get("/", function(req,res){
    res.send("hello~");
});

//app.get("/login", function(req,res){
//    res.send("로그인 페이지");
//});

app.get("/login/:id", function(req,res){
    //query 는  request  객체가 소유
    //res.send("로그인 페이지");
    var topics = [
    'js',
    'nodejs',
    'express'
    ]
    var output = `
        <a href="/login/:0/?id=0">JAVASCRIPT</a><br>
        <a href="/login/:1/?id=1">nodejs</a><br>
        <a href="/login/:2/?id=2">express</a><br><br>
        ${topics[req.params.id]}
    `
    res.send(output);

});

//app.get("/login/:id/:mode", function(){
//    res.send(req.params.id+' , ' + req.params.mode);
//})

app.listen("3333", function(){
    console.log("express listen 완료~");
})