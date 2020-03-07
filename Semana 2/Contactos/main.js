// Las iffe hacen que el JavaScript no pueda ser cambiado por la gente que entre a la página
(function() {
// Use strict hace que el codigo tenga que ser escrito de manera correcta,
// de lo contrario podria seguir funcionando pero si se tienen errores sera más dificil identificarlos
  'use strict';

  console.log("Hola, si ves esto tu JavaScript sirve");

  function saludo(texto){
    console.log(texto);
  }

  saludo("Hola desde la función de saludo!");

  var boton = document.getElementById("guardar");

  console.log(boton);

  boton.addEventListener("click", function(){
    // alert("Yei!! picaste el botón");
    saludo("Hola desde el botón");
  })

  function crearRow(){

  var nombre = document.getElementById("nombre");
  var apellidos = document.getElementById("apellidos");
  var email = document.getElementById("email");
  var telefono = document.getElementById("telefono");

  console.log(nombre, apellidos, email, telefono);

  var tabla = document.querySelector(".list table");
  console.log(tabla);
  
  }
}());
