/*
Cree un programa que imprima la tabla de multiplicar del 3, del 0 al 50. Use ciclo for
*/
console.log("tabla de multiplicar del 3");
let multiplicar = 0;
let tabla=3;
for (let index = 0; index <= 50; index++) {
    multiplicar= tabla * index;
    console.log(multiplicar);
}