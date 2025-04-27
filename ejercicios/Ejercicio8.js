// 10. Pedir un número N, introducir N sueldos, y mostrar el sueldo máximo.
// Necesitamos mostrar un contador con 5 dígitos (X-X-X-X-X), que muestre
// los números del 0-0-0-0-0 al 9-9-9-9-9, con la particularidad que cada vez
// que aparezca un 3 lo sustituya por una E.

let N; 
let sueldos;
let sueldo;
let contador;
let contadorModificado;
let formato;

N = parseInt(prompt("Introduce el número de sueldos a ingresar:"));
sueldos = [];

for (let i = 0; i < N; i++) {
  sueldo = parseFloat(prompt(`Introduce el sueldo ${i + 1}:`));
  sueldos.push(sueldo);
}

let sueldoMaximo = Math.max(...sueldos);
window.alert(`El sueldo máximo es: ${sueldoMaximo}`);
console.log(`El sueldo máximo es: ${sueldoMaximo}`);


for (let i = 0; i <= 99999; i++) {
  contador = String(i).padStart(5, '0'); 
  contadorModificado = contador.replace(/3/g, 'E'); 
  formato = contadorModificado.split('').join('-');
  window.alert(formato);
  console.log(formato);
}