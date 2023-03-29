/*
Cree un programa que imprima los números enteros entre 0 y 100 en orden ascendente y descendente. Use
ciclo for
*/
console.log("orden ascendete");
let suma = 0;
for (let index = 0; index <= 100; index++) {
    console.log(index);
    suma=suma+index;
}
/*
descendente
*/
console.log("orden descendente");
let suma2 = 100;
for (let index = 100; index >= 0; index--) {
    console.log(index);
    suma2=suma2-index;
}