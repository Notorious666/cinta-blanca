// Ejercicio 1:
// Declarar cuatro funciones que se llamen suma, resta, multiplicación y división para dos números

function suma(num1, num2) {
  console.log(num1 + num2);
}

function resta(num1, num2) {
  console.log(num1 + num2);
}

function multiplicacion(num1 , num2) {
  console.log(num1 * num2);
}

function division(num1, num2) {
  console.log(num1 / num2);
}

var a = parseInt(prompt("Escribe un número"));

var b = parseInt(prompt("Escribe otro número"));

var c = prompt("Escribe la operación que quieras realizar con ellos", "Suma, Resta, Multiplicacion, Division")

if(c == "Suma"){
  suma(a, b);
}else{
  if(c == "Resta"){
    resta(a, b);
  }else{
    if(c == "Multiplicacion"){
      multiplicacion(a, b);
    }else{
      if(c == "Division"){
        division(a, b);
      }else{
        console.log("No se encuentra disponible esa operacion");
      }
    }
  }
}
