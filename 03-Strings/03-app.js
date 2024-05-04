"use strict";
// Concatenar o unir 2 textos o variables:
const producto5 = "Monitor 20 Pulgadas ";
const precio = "30 USD";
console.log(producto5.concat("En Descuento")); // Concactenar un string
console.log(producto5.concat(precio)); // Concactenar una variable
// Otras formas de concatenar:
console.log(producto5 + precio);
console.log(producto5 + "Con un precio de " + precio);
console.log("El Producto" + producto5 + " tiene un precio de " + precio); // Esta forma se puede complicar
console.log("El Producto", producto5, " tiene un precio de ", precio); // Otra forma
// ES6 trajo consigo una mejor forma de concatenar variables que es con algo llamado Template String o template literal
console.log(`El Producto ${producto5} tiene un precio de ${precio}`);
