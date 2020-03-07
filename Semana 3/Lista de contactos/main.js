(() => {
  'use strict';


  // Verificamos la conexión entre nuestro HTML y nuestro JS
  console.log("Hola, si ves esto, tu Javascript sirve! Yei!");


  // Creamos una función saludo cuyo parámetro sea un texto el cual será enviado a la consola una vez llamada la función

  function saludo(texto){
    console.log(texto);
  }

  // Hacemos una prueba de la función saludo

  saludo("Hola desde la función saludo!");


  // Localizamos el botón de nuestro HTML a través de su ID y lo almacenamos en una variable llamada boton

  var boton = document.getElementById("guardar");

  console.log(boton);


  // Verificamos que pase algo cuando demos click en el botón

  boton.addEventListener("click", function(){
    // alert("Yei picaste el botón!");
    saludo("Hola desde el botón!");
    crearFila();

  });

  // Creamos una función que capture los datos ingresados por el usuario y que los construya en una nueva fila para la tabla en HTML

  function crearFila(){

    // Primero capturamos los datos del HTML en variables de JS

    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var telefono = document.getElementById("telefono");


    // Enviamos esas variables a la consola para saber qué elementos capturó

    console.log(nombre, apellidos, email, telefono);


    // Procedemos de la misma forma con el elemento tabla
    var tabla = document.querySelector(".list table")

    console.log(tabla);


    // Condicionamos con IF que ninguno de los campos/inputs estén vacíos

    if (nombre.value == ""){
      alert("Hey bro te falta el nombre!");
    } else if (apellidos.value == ""){
      alert("Tampoco te pases, te faltaron los apellidos");
    } else if (email.value == ""){
      alert("Te falta correo");
    } else if (telefono.value == ""){
      alert("Estás cañón, te falta tu teléfono");
    } else {

      //Forma 1: Construyendo el DOM desde JS concatenando etiquetas HTML y los valores capturados

      // // Ya con esos datos capturados, creamos una nueva fila en código HTML como una gran cadena
      // // La variable nuevaFila es una concatenación de las etiquetas HTML como cadenas y los valores que ingresa el usuario en cada input

      // var nuevaFila = '<tr>'+
      //                     '<td>'+nombre.value+'</td>'+
      //                     '<td>'+apellidos.value+'</td>'+
      //                     '<td>'+email.value+'</td>'+
      //                     '<td>'+telefono.value+'</td>'+
      //                 '</tr>';
      //
      // // Enviamos la nuevaFila a la consola para saber cómo quedó
      //
      // console.log(nuevaFila);


      // Insertamos nuevaFila hasta abajo de la tabla usando el método insertRow(n) donde n es la posición de la tabla

      // tabla.insertRow(-1).innerHTML = nuevaFila;


      //Forma 2: Insertando el valor de cada input celda por celda

      // var nuevaFila = tabla.insertRow(-1);
      //
      // nuevaFila.insertCell(0).innerHTML = nombre.value;
      // nuevaFila.insertCell(1).innerHTML = apellidos.value;
      // nuevaFila.insertCell(2).innerHTML = email.value;
      // nuevaFila.insertCell(3).innerHTML = telefono.value;


      // Forma 3: Insertando cada input en las celdas a través de un ciclo FOR

      var nuevaFila = tabla.insertRow(-1);

      var datos = [nombre.value, apellidos.value, email.value, telefono.value]

      for (var i = 0; i < datos.length; i++) {
        nuevaFila.insertCell(i).innerHTML = datos[i];
      }


      // Una vez construida la nueva fila e insertados cada uno de los valores del input en esta nueva fila, limpiar los campos

      nombre.value = "";
      apellidos.value = "";
      email.value = "";
      telefono.value = "";

    }

  }

})();
