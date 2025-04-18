function adivinar() {
let secreto;
let intento;

secreto = parseInt(prompt("Jugador 1: Ingresa el número secreto"));
intento = parseInt(prompt("Jugador 2: Adivina el número"));

  if (intento < secreto) {
    alert("El número secreto es mayor");
    adivinar();
  }

  if (intento > secreto) {
    alert("El número secreto es menor");
    adivinar();
  }

  if (intento === secreto) {
    alert("¡Correcto! Adivinaste el número.");
  }
}

adivinar();