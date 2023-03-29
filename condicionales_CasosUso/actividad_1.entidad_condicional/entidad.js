let nombreEmpleado = prompt("Ingrese el nombre del empleado:"); 
let estrato = prompt("Ingrese el estrato socio-económico del empleado (de 1 a 6):"); 
let antiguedad = prompt("Ingrese la antigüedad del empleado en años:"); 


estrato = parseInt(estrato);
antiguedad = parseInt(antiguedad);


if (estrato < 4 && antiguedad >= 8) {
  console.log(`${nombreEmpleado} tiene derecho al subsidio de vivienda.`);
} else {
  console.log(`${nombreEmpleado} no tiene derecho al subsidio de vivienda.`);
}
