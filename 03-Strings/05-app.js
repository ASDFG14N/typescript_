"use strict";
// En este video estaremos viendo 3 métodos más .replace, .slice y .repeat
// Replace
const producto7 = "Monitor 20 Pulgadas";
console.log(producto7.replace("20", "24"));
console.log(producto7.replace("Pulgadas", '"'));
// Slice te va a permitir extraer una parte de una cadena
console.log(producto7.slice(0, 10)); // Iniciar en 0 y cortar hasta 10
console.log(producto7.slice(8)); // Cortar desde el 8 hasta el fin
console.log(producto7.slice(2, 10)); // cortar desde 2 hasta el 10
console.log(producto7.slice(2, 1)); // Si el primer número es mayor, no va a cortar hacia atras...
// Existe uno similar a Slice que se llama substring
console.log(producto7.substring(0, 10));
console.log(producto7.substring(2, 1)); // Si el número es mayor al segundo, va a cortar hacia atras (voltear los números)
// Si has visto algunos sitios web muestran tu primer letra de tu nombre:
const nombre = "Juan";
console.log(nombre.substring(0, 1));
console.log(nombre.charAt(0));
