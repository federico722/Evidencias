let figura = "circulo"; 
let base = 5; 
let altura = 10;
let radio = 3;

if (figura === "triangulo") {
  let area = (base * altura) / 2;
  console.log(`El área del triángulo es ${area}`);
} else if (figura === "rectangulo") {
  let area = base * altura;
  console.log(`El área del rectángulo es ${area}`);
} else if (figura === "circulo") {
  let area = Math.PI * Math.pow(radio, 2);
  console.log(`El área del círculo es ${area}`);
} else {
  console.log("Figura geométrica inválida");
}
