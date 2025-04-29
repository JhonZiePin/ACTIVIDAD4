// 2. Realizar un juego para adivinar un número. Para ello pedir un número N,
// y luego ir pidiendo números indicando “mayor” o “menor” según sea
// mayor o menor con respecto a N. El proceso termina cuando el usuario acierta.

let N;
let numero;

N = parseInt(prompt("Ingresa el número que quieres adivinar: "));

while (numero !== N) {
numero = parseInt(prompt("Adivina el número"));

  if (numero < N) {
    window.alert("El número secreto es mayor");
    console.log("El número secreto es mayor");
  
  }

  if (numero > N) {
    window.alert("El número secreto es menor");
    console.log("El número secreto es menor")
   
  }

  if (numero === N) {
    window.alert("¡Muy Bien! Adivinaste el número secreto.");
    console.log("¡Muy Bien! Adivinaste el número secreto.")
  }
}

