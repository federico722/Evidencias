/*
Cree un programa que tome un número real e imprima su valor absoluto
*/
let numero = prompt("Ingrese un número:"); 


numero = parseFloat(numero);


let valorAbsoluto = Math.abs(numero);


console.log(`El valor absoluto de ${numero} es ${valorAbsoluto}`);
