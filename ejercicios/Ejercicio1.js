function leerYCalcular() {
let numero;
let cuadrado;

numero=parseFloat(prompt("Digite un numero"));

if(numero>=0){
    cuadrado=numero*numero;
    alert("El cuadrado de "+numero+"es"+cuadrado)
} else{
    alert("Se introdujo un numero negativo, fin del programa")
}
}
leerYCalcular(); 
