// Sirven para repetir una serie de instrucciones hasta que se cumpla una condición
// i es el estandar para iteración
//Sintaxis: for(var inicio; final; secuencia a seguir){
// (Lo que vamos a seguir)
// }
// Recordar que n++ es lo mismo que n=n+1 y n-- es lo mismo que n=n-1

for(var i=0; i<=10; i++){
  console.log(i);
}

//Hacer un ciclo que empieze en 100, termine en 300 y avance de 5 en 5, imprimir todos los números

for (var i=100; i<=300; i=i+5){
  console.log(i);
}

//Hacer un ciclo que empieze en 200, termine en -200 y avance de 2 en 2, imprimir todos los números

for (var i=200; i>= -200; i=i-2){
  console.log(i);
}

//Declarar un arreglo con 5 números e imprimir a traves de un ciclo for los datos de ese arreglo

var arreglo = [20, 40, 60, 80, 100];

for (var i=0; i<=arreglo.length-1; i++){
  console.log(arreglo[i]);
}

//Escribir una palabra y a traves de un ciclo for imprimir cada letra
var palabra = prompt("Escribe una palabra")

for (var i=0; i<= palabra.length-1 ; i++){
  console.log(palabra[i]); //Las cadenas se comportan como arreglos
}
