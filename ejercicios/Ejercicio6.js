let num;
let i = 1;
let resultado;

function pedirNumero() {

num=parseInt(prompt("Ingrese la tabla de multiplicar que desea calcular"));

if (num>=0 && num<=10) {

    resultado = `Tabla del ${num}:\n`;

  while (i <= 10) {

    resultado += `${num} x ${i} = ${num*i}\n`;
    i++;
  }

  alert(resultado);
} else {
  window.alert("Número inválido. Debe estar entre 0 y 10.");
  pedirNumero();
}

}
pedirNumero();