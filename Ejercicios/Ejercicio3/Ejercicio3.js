// 3. Diseñar un programa que muestre el producto de los 10 primeros
// números impares

let producto=1;
let numerosImpares="";

for (let i=1, contador=0; contador < 10; i += 2, contador++) {
  producto *= i;
  numerosImpares += i; 
  if (contador < 9) {
    numerosImpares += ", ";
  }
}

window.alert(`El producto de los 10 primeros números impares es: 
  ${numerosImpares}\nEl producto es: ${producto}`);
console.log(`El producto de los 10 primeros números impares es: 
   ${numerosImpares}\nEl producto es: ${producto}`);