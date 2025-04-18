let N;
let numero;

N = parseInt(prompt("Ingresa el número secreto"));

function adivinar() {
numero = parseInt(prompt("Adivina el número"));

  if (numero < N) {
    alert("El número secreto es mayor");
    adivinar();
  }

  if (numero > N) {
    alert("El número secreto es menor");
    adivinar();
  }

  if (numero === N) {
    alert("¡Correcto! Adivinaste el número.");
  }
}

adivinar();