let cantidad = prompt("Ingrese la cantidad:"); 
let porcentaje = prompt("Ingrese el porcentaje a calcular:"); 


cantidad = parseFloat(cantidad);
porcentaje = parseFloat(porcentaje);


let valorPorcentaje = (cantidad * porcentaje) / 100;


console.log(`El ${porcentaje}% de ${cantidad} es ${valorPorcentaje}`);
