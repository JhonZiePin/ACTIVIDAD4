// 8. Pedir un número N, introducir N sueldos, y mostrar el sueldo máximo.

let N; 
let sueldos;
let sueldo;

N = parseInt(prompt("Introduce el número de sueldos a ingresar:"));
sueldos = [];

for (let i = 0; i < N; i++) {
  sueldo = parseFloat(prompt(`Introduce el sueldo ${i + 1}:`));
  sueldos.push(sueldo);
}

let sueldoMaximo = Math.max(...sueldos);
window.alert(`El sueldo máximo es: ${sueldoMaximo}`);
console.log(`El sueldo máximo es: ${sueldoMaximo}`);
