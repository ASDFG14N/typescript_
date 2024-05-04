// Un objeto puede contener cualquier tipo de dato dentro de el, incluso puede tener otros objetos:, esto se le conoce como Objetos anidados.


const product = {
  nombre: "Monitor 20 pulgadas",
  precio: 30,
  disponible: true,
  informacion : {
      peso: '1kg',
      medida: '1m'
  }
}



console.log(product); // Puedes ver que tenemos un objeto dentro de un objeto.

// De nueva cuenta para acceder a un objeto, se utiliza la sintaxis de punto

console.log(product.informacion);
console.log(product.informacion.peso);
console.log(product.informacion.medida);
