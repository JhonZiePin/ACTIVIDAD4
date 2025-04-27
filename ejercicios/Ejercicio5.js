// 5. Pedir 10 números. Mostrar la media de los números positivos, la media de
// los números negativos y la cantidad de ceros.


let numPositivos = 0;
let numNegativos = 0;
let ceros = 0;
let sumaPositivos = 0;
let sumaNegativos = 0;
let mediaPositivos;
let mediaNegativos;

for (let i = 1; i <= 10; i++) {
  let numero = parseInt(prompt(`Ingresa el número a calcular: ${i}:`));

  if (numero > 0) {
    sumaPositivos += numero;
    numPositivos++;
  } else if (numero < 0) {
    sumaNegativos += numero;
    numNegativos++;
  } else {
    ceros++;
  }
}

if (numPositivos > 0) {
  mediaPositivos = sumaPositivos / numPositivos;
  window.alert(`La media de los números positivos es: ${mediaPositivos}`);
} else {
  window.alert("No se han ingresado números positivos.");
}

if (numNegativos > 0) {
  mediaNegativos = sumaNegativos / numNegativos;
  window.alert(`La media de los números negativos es: ${mediaNegativos}`);
} else {
  window.alert("No se han ingresado números negativos.");
}

window.alert(`La cantidad de ceros es: ${ceros}`);