"use strict";
// En este video 3 métodos para strings
const producto6 = "        Monitor 20 Pulgadas      ";
console.log(producto6);
console.log(producto6.length);
// Eliminar el inicio
console.log(producto6.trimStart()); // Elimina todos los espacios en blancos del inicio
console.log(producto6.trimEnd()); // Elimina todos los espacios en blancos del final
// Los métodos en javaScript se pueden encadenar, es decir, colocarse uno junto al otro
console.log(producto6.trimStart().trimEnd()); // Cortar en ambas direcciones
// Un método (que ya tiene rato ) es trim que hace lo mismo
console.log(producto6.trim().length);
