let n = 5; 

let i = 1;
let sumaCuadrados = 0;

while (i <= n) {
  sumaCuadrados += i * i;
  i++;
}

console.log(`La suma de los cuadrados de los números entre 1 y ${n} es ${sumaCuadrados}`);
