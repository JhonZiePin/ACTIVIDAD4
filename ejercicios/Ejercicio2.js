let N;
let numero;

N = parseInt(prompt("Ingresa el número N"));

function adivinar() {
numero = parseInt(prompt("Adivina el número"));

  if (numero < N) {
    alert("El número N es mayor");
    adivinar();
  }

  if (numero > N) {
    alert("El número N es menor");
    adivinar();
  }

  if (numero === N) {
    alert("¡Muy Bien! Adivinaste el número.");
  }
}

adivinar();