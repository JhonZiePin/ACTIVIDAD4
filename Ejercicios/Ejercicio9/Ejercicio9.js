// 9. Necesitamos mostrar un contador con 5 dígitos (X-X-X-X-X), que muestre
// los números del 0-0-0-0-0 al 9-9-9-9-9, con la particularidad que cada vez
// que aparezca un 3 lo sustituya por una E.

// Jhon Fredy Sierra Pineda
// Edwin Alejandro Sierra Pineda

let str;
let reemplazar;
let guiones;

for (let i = 0; i <= 99999; i++) {
  str = i.toString().padStart(5, '0'); 
  reemplazar = str.replace(/3/g, 'E'); 
  guiones = reemplazar.split('').join('-'); 

  window.alert(guiones);
  console.log(guiones);
}