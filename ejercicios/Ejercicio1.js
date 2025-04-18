
function leerYCalcular() {
let numero;
let cuadrado;

numero=parseFloat(prompt("Digite un numero"));

if(numero>=0){
    cuadrado=numero*numero;
    window.alert(`El cuadrado de: ${numero} es ${cuadrado}`)
    leerYCalcular();
} else{
    window.alert("Se introdujo un numero negativo, fin del programa")
}
}
leerYCalcular();
