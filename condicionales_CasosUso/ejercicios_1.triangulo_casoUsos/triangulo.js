console.log("ingrese angulo");
let angulo1=parseInt(prompt());
console.log("ingrese angulo");
let angulo2=parseInt(prompt());
console.log("ingrese angulo");
let angulo3=parseInt(prompt());
resultado= angulo1+angulo2+angulo3==180;
switch (resultado) {
    case true:
        console.log("sus angulos si corresponden a un triangulo");
        break;
    default:
        console.log("sus angulos no corresponden a un triangulo");
        break;
}