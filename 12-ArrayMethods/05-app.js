"use strict";
// en este video estaremos viendo FIND.
// fiND te creará un arreglo nuevo en base al primer resultado que sea true...
const carrito6 = [
    { nombre: "Monitor 20 Pulgadas", precio: 500 },
    { nombre: "Televisión 50 Pulgadas", precio: 700 },
    { nombre: "Tablet", precio: 300 },
    { nombre: "Audifonos", precio: 200 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Celular", precio: 500 },
    { nombre: "Bocinas", precio: 300 },
    { nombre: "Laptop", precio: 800 },
];
// con un foreach seria algo asi...
let resultado = {};
carrito6.forEach((producto, index) => {
    if (producto.nombre === "Bocinas") {
        resultado = carrito6[index];
    }
});
console.log(resultado);
// con .find seria
const resultado2 = carrito6.find((producto) => producto.nombre === "Bocinas");
console.log(resultado2);
