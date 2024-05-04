"use strict";
// Otro iterador muy común es el while loop, este se ejecuta mientras una condición sea verdadera..
let i = 0;
while (i < 10) {
    // condicion
    // Bloque de código...
    console.log(`Numero: ${i}`);
    i++; // incremento
}
// El while se ejecuta mientras una condición sea verdadera, por lo tanto si inicicializamos en 20, no hará nada..
/* Intenta realizar los mismos ejemplos  Detectar pares y nones y el fizz buzz con el while, seguramente va a quedar mucho mas claro... */
// Veamos otro iterador que es muy común en otros lenguajes y también en javascript, es el do while...
// a diferencia del for y del while, el do while se ejecuta al menos una vez, y después verifica si la condición se cumple...
// Do While va a correr al menos una vez.
let i2 = 0; // probar con 1000
do {
    console.log(`Numero: ${i2}`);
    i2++;
} while (i2 < 10);
// Ahora, lo que hace diferente a un while de un for o un do while, es que al menos se va a ejecutar una vez aunque la condición no se cumpla...
// cambiamos el i a 100 y revisamos...
