let contador = 0;
let suma = 0;

while (contador < 10) {
  let numero = parseFloat(prompt("Ingrese un número:"));

  if (isNaN(numero)) {
    console.log("Error: debe ingresar un número válido.");
  } else {
    suma += numero;
    contador++;
  }
}

let promedio = suma / 10;

console.log("El promedio de los 10 números ingresados es:",promedio);
