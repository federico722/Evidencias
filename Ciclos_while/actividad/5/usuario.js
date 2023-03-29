let respuesta = "";

while (respuesta !== "S" && respuesta !== "s") {
  respuesta = prompt("¿Desea salir? (S/N)");

  if (respuesta === "N" || respuesta === "n") {
    
    alert("Continuando ejecución del programa...");
  } else if (respuesta === "S" || respuesta === "s") {
    
    alert("Saliendo del programa...");
    break;
  } else {
    
    alert("Respuesta inválida. Intente de nuevo.");
  }
}
