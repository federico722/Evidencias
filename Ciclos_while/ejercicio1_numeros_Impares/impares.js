/*
Mostrar los números impares entre 0 y 100 
*/
let contador = 0;
while (contador <= 100) {
  if (contador % 2 != 0){
    console.log(contador, " es impar");
  }
  contador++;
  //hacer contador++; es lo mismo que contador = contador + 1 
}