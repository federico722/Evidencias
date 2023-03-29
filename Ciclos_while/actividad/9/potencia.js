let a = parseInt(prompt("Ingrese la base:"));
let b = parseInt(prompt("Ingrese el exponente:"));
let potencia = 1;
let contador = 0;

while (contador < b) {
  potencia *= a;
  contador++;
}

console.log(`${a} elevado a la ${b} es ${potencia}.`);
