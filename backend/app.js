const express=require('express');
const bodyparser=require('body-parser');
const nodemailer=require('nodemailer');

const app=express();
app.use(express.static("style"));
app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname +"/index.html");
    console.log(__dirname);
});

app.post("/",function(req,res){
const comm=req.body.message; 
const na=req.body.name;   
var transpoter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'mm8280324@gamil.com',
        pass:''
    }
})         
});

app.listen(3000,function(){
    console.log("server started at 3000");
})