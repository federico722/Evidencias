/*
Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/
let numero = parseFloat(prompt("ingrese numero"))

if (numero%5==0 ) {
    console.log("su numero es divisible entre 5");
} else {
    console.log("su numero no es divisible entre 5");
}