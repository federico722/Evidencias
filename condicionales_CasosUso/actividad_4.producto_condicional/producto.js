let precio = 100;
let descuento = 20;

if (descuento < 0 || descuento > 100) {
  console.log("Porcentaje de descuento inválido");
} else {
  let precioFinal = precio - (precio * descuento) / 100;
  console.log(`El precio final después del descuento es ${precioFinal}`);
}
