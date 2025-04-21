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

