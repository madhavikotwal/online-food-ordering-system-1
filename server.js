var express=require('express');
var path=require('path');
const app=express();
var bodyParser=require('body-parser');

//Configure public folder as static folder  to express module

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var staticFolder=express.static(path.join(__dirname,"public"));
app.use(staticFolder);

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.post("/login",(req, res)=>{

 var data=req.body;
 console.log(data);

 if(data.username=="aarohibadgujar@gmail.com" && data.password=="lucy"){
     console.log("Valid user");
     res.sendFile(path.join(__dirname + '/public/welcome.html'));
     //invoke database logic to check username and passwrod 
     //from mysql

 }
 else{
     console.log("Invalid User");
     res.sendFile(path.join(__dirname + '/public/error.html'));
 }

 console.log( "Login post action method is invoked");

});

app.listen(9000);
console.log("Website is being hosted on port no 9000");
