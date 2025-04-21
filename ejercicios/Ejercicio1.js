let numero;
let cuadrado;

do{
numero=parseFloat(prompt("Digite un numero"));

if(numero>=0){
    cuadrado=numero*numero;
    window.alert(`El cuadrado de: ${numero} es ${cuadrado}`);
} else{
    window.alert("Se introdujo un numero negativo, fin del programa")
}
}
while (numero >= 0);
