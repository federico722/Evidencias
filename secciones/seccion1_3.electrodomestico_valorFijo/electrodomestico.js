const valorAumento=0.25;
console.log("ingrese el precio del electrodomestico");
let precio=parseInt(prompt());
console.log("ingrese el plazo a meses que debera pagar a credito");
let plazo=parseInt(prompt());
aumentoPrecio=precio*valorAumento+precio;
cuotaMensual=aumentoPrecio/plazo;
console.log("el valor fijo que debera pagar es", cuotaMensual);