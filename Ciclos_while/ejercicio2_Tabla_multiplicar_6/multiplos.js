/*
Mostrar los múltiplos de 6 entre 0 y 100
*/
let contador= 0;
let cantidadmultiplos= 0;
while (contador <= 100) {
    if (contador % 6==0){
console.log(contador,"es multiplo de 6");
cantidadmultiplos++
    }
    contador++;
}
console.log("la cantidad de multiplos de 6 es",cantidadmultiplos);
