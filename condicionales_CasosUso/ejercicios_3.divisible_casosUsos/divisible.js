/*
Cree un programa que lea un número y muestre si este es divisible entre cinco o no. Realice una versión con
condicionales y otra con estructura switch-case.
*/
let numero = parseFloat(prompt("ingrese numero"))
operacion=numero%5==0
switch (operacion) {
    case true:
        console.log("si es divisible");
        break;

    default:
        console.log("no es divisible");
        break;
}


