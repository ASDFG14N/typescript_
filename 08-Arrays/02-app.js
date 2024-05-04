"use strict";
// Veamos como acceder a los elementos de un arreglo...
const arraynumeros = [10, 20, 30, 40, 50];
// esta vez estare utilizando
console.table(arraynumeros);
// La forma en la que accedes a un arreglo es por lo que se econoce como el indice en el arreglo, los arreglos inician en 0 usualmente aunuque hay lenguajes donde inician en 1
console.log(arraynumeros[0]);
console.log(arraynumeros[1]);
console.log(arraynumeros[3]);
console.log(arraynumeros[20]);
// Veamos algunas operaciones útiles en los arreglos,
const meses2 = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];
// Si quieres saber cuantos elementos hay un arreglo puedes utilizar la propiedad
console.log(meses2.length);
// ahora, si recuerdas en videos anteriores vimos como acceder a un arreglo, pero si este arreglo tuviera 40 elementos sería muy complicado ir 1 por 1, si tienes un carrito de compras y agregas o quitas elementos del carrito, ese arreglo crece de forma dinamica, entonces, como acceder a todos los elementos? con algo llamado un iterador, y en javascript hay varios, veamos el for que existe en diferentes lenguajes...
for (let i = 0; i < meses2.length; i++) {
    console.log(meses2[i]);
}
