// 6. Pide un número (que debe estar entre 0 y 10) y muestra la tabla de
// multiplicar de dicho número.

let num;
let i = 1;
let resultado;

num=parseInt(prompt("Ingrese la tabla de multiplicar que desea calcular"));

if (num>=0 && num<=10) {

    resultado = `Tabla del ${num}:\n`;

  while (i <= 10) {

    resultado += `${num} x ${i} = ${num*i}\n`;
    i++;
  }
    window.alert(resultado);
    console.log(resultado);

} else {
  window.alert("Número inválido. Debe estar entre 0 y 10.");
  console.log("Número inválido. Debe estar entre 0 y 10.");
  num = parseInt(prompt("Ingrese la tabla de multiplicar que desea calcular"));
}
