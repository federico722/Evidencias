/*
Cree un programa que lea un número entre 1 y 15 y muestre si éste es primo o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/
let numero=parseFloat(prompt("INGRESE NUMERO"));
if (numero<=15 && numero/numero === 0 ) {
    console.log("su numero es primo");
} 
if (numero<=15 && numero%numero !== 0) {
    console.log("no es primo");
}