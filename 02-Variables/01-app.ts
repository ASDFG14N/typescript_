// Las variables son una caracteristica de cualquier lenguaje de programación
// existen 3 formas de crear variables en TS, en nuevas versiones solo se utilizan 2:
// Variables con var

var producto = "Monitor 23 Pulgadas"; // Inicializamos una variable con un valor;

// Las variables también se pueden reasignar
producto = "Monitor de 19 Pulgadas";

console.log(producto);

var precio = 200;
console.log(precio);

var disponible;
disponible = true;

// Inicializar múltiples variables
var categoria = "Computadoras",
  marca = "Marca Famosa",
  calificacion = 5;

console.log(categoria);
console.log(marca);
console.log(calificacion);

// Reglas de las variables:

// Pueden tener: letras, numeros, _
// No pueden iniciar con numero

// Estilos para nombrar variables con más de una palabra

// más de una palabra.
var nombreProducto = "Monitor 30 Pulgadas"; // CamelCase
var nombre_producto = "Monitor 30 Pulgadas"; //underscore
var NombreProducto = "Monitor 30 Pulgadas"; // pascal case
var nombreproducto = "Monitor 30 Pulgadas";
