let nombre = prompt("Ingrese el nombre del empleado:");
let estrato = parseInt(prompt("Ingrese el estrato socioeconómico del empleado (debe estar entre 1 y 6):"));
let antiguedad = parseInt(prompt("Ingrese la antigüedad del empleado en años:"));

// Verificamos si cumple con los criterios para el subsidio utilizando switch
switch (true) {
case (estrato < 4 && antiguedad >= 8):
    console.log(nombre + " tiene derecho al subsidio de vivienda.");
    break;
default:
    console.log(nombre + " no tiene derecho al subsidio de vivienda.");
    break;
}
