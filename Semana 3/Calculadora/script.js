(() => { //IIFE: Expresión de Función Inmediatamente Invocada
  'use strict';

  //Primero identificamos y almacenamos los elementos que usaremos del HTML
  // document.querySelectorAll Hace que todo lo que tenga esa etiqueta sea almacenado en un arreglo

  var botones = document.querySelectorAll("button");
  var display = document.querySelector("input");

  console.log(botones, display);


  // Declaramos las variables con las que vamos a trabajar
  var valor1 = "";
  var valor2 = "";
  var operador = "";


  // Establecemos una señal de tipo "flag" o bandera para evitar que el punto sea repetido
  var punto = false;


  // Creamos una función que imprima el id de cada uno de los botones en la consola

  function obtenerDato(evento){
    // console.log(evento.target.getAttribute("id"));
    console.log(evento.target.id); // .id es igual a escribir getAttribute("id")


    // Del arreglo de botones, identifica los números e imprimirlos en el display
    if (evento.target.id >= "0" && evento.target.id <= "9"){
      // display.value = display.value + evento.target.id;
      display.value += evento.target.id; //Es lo mismo que arriba
    }

    // Del arreglo de botones, identificamos los operadores, almacenamos el display en un valor1 y limpiamos el display para que el usuario coloque otro valor
    if (evento.target.id == "+" || evento.target.id == "-" || evento.target.id == "x" || evento.target.id == "/" || evento.target.id == "%"){
      valor1 = display.value;
      operador = evento.target.id;
      display.value = "";
      punto = false;
      // console.log(valor1, operador); Imprimimos en la consola valor1 y operador para verificar que se estén registrando correctamente
    }

    // Del arreglo de botones identificamos el punto sólo si este no ha sido colocado y marcamos su bandera como true
    if (evento.target.id == "." && punto == false){
      if(display.value == ""){
        display.value = 0 + ".";
        punto = true;
      } else {
        display.value += ".";
        punto = true;
      }
    }

    // Cambio de signo, lo que realmente representa una multiplicación del display por -1
    if (evento.target.id == "s" && display.value != ""){
      display.value = parseFloat(display.value)*-1; //Usamos el parseFloat para que el display.value sea interpretado como un número y no como una cadena
    }


    // Del arreglo de botones identificamos el ac o All Clear para limpiar todos los valores y display de nuestra calculadora
    if (evento.target.id == "ac"){
      display.value = "";
      valor1 = "";
      valor2 = "";
      operador = "";
      punto = false;
    }


    // Del arreglo de botones identificamos el botón de igual y calculamos el resultado de valor1 (previamente almacenado), valor2 (almacenado en el momento en el que se pica el botón igual) con respecto a la operación indicada (de igual forma, previamente indicada)
    if(evento.target.id == "="){
      if(valor1 != "" && display.value != ""){
        valor2 = display.value;
        display.value = resultado(valor1, valor2, operador);
      }
    }

  }

  // Creamos una segunda función llamada resultado que procesará y calculará el resultado entre valor1, valor2, y la operación indicada
  function resultado(a, b, operacion){
    if(operacion == "+"){
      return parseFloat(a) + parseFloat(b);
    } else if(operacion == "-"){
      return parseFloat(a) - parseFloat(b);
    } else if(operacion == "x"){
      return parseFloat(a) * parseFloat(b);
    } else if(operacion == "/"){
      return parseFloat(a) / parseFloat(b);
    } else if(operacion == "%"){
      return parseFloat(a) * parseFloat(b) / 100;
    }
  }
// | esta barra se escribe con alt+1
  // Ciclamos el arreglo de los botones y le indicamos que esté pendiente de cualquier evento
  // siendo el "click" el que dispara la función obtenerDato

  for (var i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", obtenerDato);
  }

})();
