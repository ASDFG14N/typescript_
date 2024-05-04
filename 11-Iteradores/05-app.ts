//For of itera sobre arreglos
const carrito = [
  { id: 1, producto: "Libro" },
  { id: 2, producto: "Camisa" },
  { id: 3, producto: "Disco" },
];

for (let producto of carrito) {
  console.log(producto.producto);
}

// el for in va a iterar sobretodas las propiedades de un objeto, pero primero veamos como recorrer un arreglo con objetos...
let automovil: { [key: string]: string } = {
  modelo: "Camaro",
  motor: "6.0",
  anio: "1969",
  marca: "Chevrolet",
};

for (let auto in automovil) {
  console.log(`${auto} : ${automovil[auto]}`);
}
