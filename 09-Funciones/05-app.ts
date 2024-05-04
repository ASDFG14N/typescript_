// Funciones que retornan valores

// Actualmente hemos tenido funciones que envian datos a la consola, ya cuando veamos la parte del DOM algunas funciones van a validar formularios y seguramente ejecutaran todo el código ahí, pero también tendremos funciones que retornan valores para pasarlos hacia otras funciones o hacer algo más...

function operacion(a: number, b: number) {
  return a + b;
}

const resultado = operacion(1, 2);

console.log(resultado);

// Ejemplo más avanzado....
let total = 0;
function agregarCarrito(precio:number) {
  return (total += precio);
}

function calcularImpuesto(total: number): number {
  return 1.15 * total;
}

total = agregarCarrito(200);
total = agregarCarrito(300);
total = agregarCarrito(400);
console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de ${totalPagar}`);
