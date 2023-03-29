/*
Mostrar los múltiplos de 6 entre 0 y 100 
*/
let contador = 0;
while (contador <= 100) {
  if (contador % 6 == 0){
    console.log(contador, " es multiplo de 6");
  }
  contador++;
  //hacer contador++; es lo mismo que contador = contador + 1 
}