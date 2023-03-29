let numeroPar
console.log("ingrese numero");
let numero=parseInt(prompt());
numeroPar=numero%2==0
switch (numeroPar) {
    case true:
        console.log("si es numero par");
        break;

    default:
        console.log("no es numero par");
        break;
}
