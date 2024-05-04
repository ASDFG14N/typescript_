"use strict";
//Booleanos
let universitario = true;
if (universitario) {
    console.log("Es un universitario");
}
else {
    console.log("No es un universitario");
}
//Numbers
let edad = 18;
function mayorDeEdad(edad) {
    edad >= 18
        ? console.log("Es mayor de edad")
        : console.log("No es mayor de edad");
}
mayorDeEdad(edad);
//String
const nombre = "ASDF";
console.log(`El nombre es: ${nombre}`);
//Varios tipos
let lenguaje;
lenguaje = null;
console.log(lenguaje);
