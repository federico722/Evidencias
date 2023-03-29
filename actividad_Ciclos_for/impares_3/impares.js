/*
Cree un programa que muestre los números impares entre 1 y n. Use ciclo for
*/

let numero = parseInt(prompt("ingrese numero"));
for (let index = 1; index <= numero; index=index+2) {
    console.log("index:",index);
}