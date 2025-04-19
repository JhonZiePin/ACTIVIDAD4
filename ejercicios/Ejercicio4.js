let numero = parseInt(prompt("Ingresa un número para calcular su factorial:"));

if (isNaN(numero)) {
  alert("Eso no es un número válido.");
} else if (numero < 0) {
  alert("No se puede calcular el factorial de un número negativo.");
} else {
  let factorial = 1;
  let i = 1;
  let listaNum = "";

  while (i <= numero) {
    factorial *= i;
    listaNum += i;

    if (i < numero) {
      listaNum += " × ";
    }

    i++;
  }

  alert(`${numero}! = ${listaNum} = ${factorial}`);
}

