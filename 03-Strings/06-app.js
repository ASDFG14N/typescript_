"use strict";
// Repeat Te va a permitir repetir una cadena de texto:
const producto8 = "Monitor 24 pulgadas ";
const texto = "en Promoción ".repeat(3);
console.log(producto8.repeat(3));
console.log(producto8.repeat(2.2)); // va a redondear a entero
console.log(`${producto8} ${texto} !!!`);
// Split
const actividad = "Estoy aprendiendo Javascript Moderno";
console.log(actividad.split(" "));
const hobbies = "Leer, caminar, escuchar musica, escribir, aprender a programar";
console.log(hobbies.split(", "));
