let figura = prompt("Ingrese la figura geométrica (triangulo, rectangulo o circulo):");
let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));

switch (figura) {
  case "triangulo":
    console.log("El área del triángulo es: " + (numero1 * numero2 / 2));
    break;
  case "rectangulo":
    console.log("El área del rectángulo es: " + (numero1 * numero2));
    break;
  case "circulo":
    console.log("El área del círculo es: " + (Math.PI * numero1 ** 2));
    break;
  default:
    console.log("La figura geométrica ingresada no es válida.");
    break;
}
