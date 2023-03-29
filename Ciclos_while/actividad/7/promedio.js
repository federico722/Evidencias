
let contador = 0;
let suma = 0;
let numero;

while (true) {
  numero = parseFloat(prompt("Ingrese un número (0 para terminar):"));

  if (isNaN(numero)) {
    console.log("Error: debe ingresar un número válido.");
  } else if (numero === 0) {
    break;
  } else {
    suma += numero;
    contador++;
  }
}

if (contador === 0) {
  console.log("No se ingresaron números para calcular el promedio.");
} else {
  let promedio = suma / contador;
  console.log(`El promedio de los ${contador} números ingresados es ${promedio}.`);
}

let n = parseInt(prompt("Ingrese un número:"));
let i = 1;
let sumaCuadrados = 0;

while (i <= n) {
  sumaCuadrados += i * i;
  i++;
}
console.log(`La suma de los cuadrados de los números entre 1 y ${n} es ${sumaCuadrados}.`);

