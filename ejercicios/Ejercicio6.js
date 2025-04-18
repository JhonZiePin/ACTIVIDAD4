let num;
let i = 1;
let resultado;

num=parseInt(prompt("Ingrese la tabla de multiplicar que desea calcular"));

if (num>=0 && num<=10) {
  
  window.alert(`Tabla del ${num} :\n`);

  while (i <= 10) {
    resultado= num + " x " + i + " = " + (num * i) + "\n";
    i++;
  }

  alert(resultado);
} else {
  windoww.alert("Número inválido. Debe estar entre 0 y 10.");
}