//jshint esversion:6
const express = require('express');
const app = express();
//Otro require
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('public'));
//Seccion rutas
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});
//Arranco el servidor
app.listen(3000, function() {
  console.log("El servidor está listo y escuchando en el puerto 3000");
});
app.post("/", function(req, res) {
  //Recojo los valores que me envia desde elformulario
  var sexo = (req.body.sexo);
  var apellidoPaterno = (req.body.apadre);
  var apellidoMaterno = (req.body.amadre);
  //Declaro 2 array de nombres
  var nombreNene = ["Noé", "Nicolás", "Mario", "Aitor", "Daniel", "Marcos", "Roman", "Andrés"];
  var nombreNena = ["Lidia", "Inés", "Sara", "Jimena", "Nerea", "Patricia", "Andrea", "Berta"];
  //Escogemos aleatoriamente un nombre
  //Genero un numero aleatorio entre 0 y x-1
  //Ese número seta la posicion n el array de nombres entre 0 y 8
  //nombres.length-1 = 8
  var posicion = Math.round(Math.random() * 7);
  //Para que me slgan los acentos del añadirArray
  res.writeHead(200, {
    "Content-Type": "text/html;charset=UTF-8"
  });
  //camprobamos si es niño o niña y respondemos con un n0mbre
  res.write("<h1 style='color:red'> ENHORABUENA!!</h1>");
  if (sexo === "valor1") {

    res.write("<h2 style='color:blue'> Puedes llamarle  :" + nombreNene[posicion] + " " + apellidoPaterno + " " + apellidoMaterno + "." + "</h2>");
  }
  if (sexo === "valor2") {

    res.write("<h2 style='color:pink'> Puedes llamarle  :" + nombreNena[posicion] + " " + apellidoPaterno + " " + apellidoMaterno + "." + "</h2>");
  }
  res.send();

});
