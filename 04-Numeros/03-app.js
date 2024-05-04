"use strict";
// Math es parte de la ventana global de JavaScript, tiene una serie de operaciones que pueden ser muy útiles y algunas actuan de forma algo extraña, asi que vamos a verlas.
let resultado6;
let resultado7;
let resultado8;
let resultado9;
let resultado10;
let resultado11;
let resultado12;
let resultado13;
let resultado14;
let resultado15;
// Pi
resultado6 = Math.PI;
console.log(resultado6);
// redondeo
resultado7 = Math.round(2.5);
console.log(resultado7);
// redondeo abajo o arriba (ceil o floor )
resultado8 = Math.ceil(2.2);
console.log(resultado8);
// Raiz cuadrada
resultado9 = Math.sqrt(144);
console.log(resultado9);
// Abssoluto
resultado10 = Math.abs(-300);
console.log(resultado10);
// Potencia
resultado11 = Math.pow(8, 3);
console.log(resultado11);
// Minimo
resultado12 = Math.min(3, 5, 1, 2, 9, 4, 2, -3);
console.log(resultado12);
// Max
resultado13 = Math.max(4, 1, 21, 4, 15, 5, 11, 5);
console.log(resultado13);
// Aleatorio
resultado14 = Math.random();
console.log(resultado14);
// Aleatorio dentro de un rango:
resultado15 = Math.floor(Math.random() * 30);
console.log(resultado15);
