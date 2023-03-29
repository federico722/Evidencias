/*
Crear un programa que muestre la multiplicación de dos cantidades. Use ciclo while. NO USE LA OPERACIÓN MULTIPLICACIÓN
*/
let numero1 =parseFloat(prompt("ingrese numero"));
let numero2 =parseFloat(prompt(" ingrese numero por el que va a multiplicar"));
let operacion= 1
let resultado= 0
while (operacion <= numero1) {
    resultado = resultado + numero1;
    operacion++;
}
console.log("la multiplicacion es:",resultado);