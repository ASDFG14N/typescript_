// Los objetos son la pieza principal en JavaScript, en lugar de crear diferentes variables:

const nombreProducto: string = "Monitor 20 Pulgadas";
const precio: number = 30;
const disponible: boolean = true;

// Podemos crear un objeto que agrupe toda esta información en una sola variable

const producto = {
  nombre: "Monitor 20 pulgadas", // La , es importante, sin ella tendriamos un error
  precio: 30,
  disponible: true, // el último elemento puede o no tener la ,
};

// Supongamos que deseamos acceder al nombre, en los objetos de javascript existe algo llamado la sintaxis de punto

console.log(product.nombre);
console.log(product.precio);
console.log(product.disponible);

// Otra forma aunque no tan común es:
console.log(product["nombre"]);

// Añadir propiedades nuevas a un objeto...
// Para añadir nuevas propiedades se utiliza de la misma forma la sintaxis de punto
product.nombre = "Monitor 50 pulg";

