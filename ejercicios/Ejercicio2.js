// 2. Realizar un juego para adivinar un número. Para ello pedir un número N,
// y luego ir pidiendo números indicando “mayor” o “menor” según sea
// mayor o menor con respecto a N. El proceso termina cuando el usuario acierta.

let N;
let numero;

N = parseInt(prompt("Ingresa el número N"));

while (numero !== N) {
numero = parseInt(prompt("Adivina el número"));

  if (numero < N) {
    alert("El número N es mayor");
  
  }

  if (numero > N) {
    alert("El número N es menor");
   
  }

  if (numero === N) {
    alert("¡Muy Bien! Adivinaste el número.");
  }
}

