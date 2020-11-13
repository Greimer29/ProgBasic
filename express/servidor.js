var express = require("express");

//vamos a crear una aplicación y la vamos a instanciar de la clase express
//pero no es una común instancia ya que no hacemos el = new bla bla bla
//porque los creadores hicieron que fuera de una función express(). 
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, respuesta) {
    respuesta.send("Este es el home")

}

function cursos(peticion, respuesta) {
    respuesta.send("Estos son los cursos")

}

aplicacion.listen(8989);