"use strict";
// Previamente vimos los operadores ternarios, llegan a ser muy útiles ya que te dan un código más simplificado, veamos como se utilizan...
const auth = false;
const puedePagar = false;
console.log(auth ? "Si esta autenticado" : "No esta autenticado");
// El OR y el && también se pueden utilizar en el ternario
console.log(auth && puedePagar ? "Si esta autenticado" : "No esta autenticado");
// Ternario anidado...
console.log(auth
    ? puedePagar
        ? "Si puede pagar"
        : "esta autenticado pero no puede pgar"
    : "No esta autenticado");
// Jugar con los valores...
// En el siguiente capítulo vamos a ver los iteradores, en JavaScript hay varios, así que veamos algunos ejemplos...
