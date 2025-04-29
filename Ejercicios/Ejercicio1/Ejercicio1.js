// 1. Leer un número y mostrar su cuadrado, repetir el proceso hasta que se
//  introduzca un número negativo.

// Edwin Alejandro Sierra Pineda.

// Hola mundo en el primer ejercicio.
window.alert("Hola Mundo!!!");
console.log("Hola Mundo!!!");

let numero;
let cuadrado;

do{
numero=parseFloat(prompt("Digite un numero"));

if(numero>=0){
    cuadrado=numero*numero;
    window.alert(`El cuadrado de: ${numero} es ${cuadrado}`);
    console.log(`El cuadrado de: ${numero} es ${cuadrado}`)
} else{
    window.alert("Se introdujo un numero negativo, fin del programa")
    console.log("Se introdujo un numero negativo, fin del programa")
}
}
while (numero >= 0);
