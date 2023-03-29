/*
Cree un programa que calcule el promedio de 10 números. Use ciclo for
*/
let suma = 0;
for (let index = 1; index <= 10; index++) {
    let numero = parseInt(prompt("ingrese numero"))
    suma = suma + numero;
    console.log(suma);
}
promedio=suma/10;
console.log("promedio:",promedio);