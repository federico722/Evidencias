/*
Cree un programa que calcula la suma de los primeros n números naturales. Use ciclo for
*/
let suma = 0;
let n = parseInt(prompt("ingrese numero"));
for (let index = 0; index <= n; index++) {
    suma=suma + index;
    
}
console.log(suma);