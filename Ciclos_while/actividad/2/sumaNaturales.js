/*
Cree un programa que calcula la suma de los primeros n números naturales
*/
let n = parseInt(prompt("ingrese numero natural"));
let resultado = 0;
let contador = 1;

while (contador <= n) {
    resultado = resultado + contador;
    contador++
}
console.log("la suma de sus numeros naturales es:",resultado);