// métodos existentes en los strings o cadenas de Texto:

const producto3: string = "Monitor 20 Pulgadas ";

console.log(producto3.length); // Conocer la extensión de una cadena, length es de los muy pocos métodos que no usan () y es más que nada porque no es un método como tal sino una propiedad.

// IndexOf
console.log(producto3.indexOf("Pulgadas")); // Nos dirá que posición tiene el texto en caso de encontrarlo
console.log(producto3.indexOf("Tablet")); // -1 Significa que no lo pudo encontrar

// Includes
console.log(producto3.includes("Monitor")); // Conocer si un texto existe
console.log(producto3.includes("monitor")); // Conocer si un texto existe
