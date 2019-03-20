//jshint esversion:6
const express=require('express');
const app=express();
//Otro require
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
//Seccion rutas
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});
//Arranco el servidor
app.listen(3000,function(){
  console.log("El servidor está listo y escuchando en el puerto 3000");
});
app.post("/",function(req,res){
//Recojo los valores que me envia desde elformulario
  var sexo=(req.body.sexo);
  var apellidoPaterno=(req.body.apadre);
  var apellidoMaterno=(req.body.amadre);
  if(sexo==="valor1"){
    res.send("El nombre  es : "+(apellidoPaterno+apellidoMaterno));
  }
});
