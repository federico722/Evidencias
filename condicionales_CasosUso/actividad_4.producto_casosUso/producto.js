let precio = parseFloat(prompt("Ingrese el precio del producto:"));
let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento (%):"));


if (descuento < 0 || descuento > 100) {
  console.log("El porcentaje de descuento ingresado no es válido.");
} else {

  switch (true) {
    case (descuento == 0):
      console.log("El precio final es: " + precio);
      break;
    case (descuento > 0 && descuento <= 100):
      let precioFinal = precio * (1 - descuento / 100);
      console.log("El precio final es: " + precioFinal);
      break;
    default:
      console.log("El porcentaje de descuento ingresado no es válido.");
      break;
  }
}
