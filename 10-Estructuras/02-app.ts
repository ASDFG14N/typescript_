// Veamos otras comparaciones
// Cuando tienes múltiples condiciones por revisar, una forma fácil de leerlo es con un switch...

const metodoPago: string = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(
      `Pagaste con ${metodoPago} revisaremos que tenga fondos primero`
    );
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago} espere un momento...`);
    break;
  default:
    console.log("Aún no has pagado");
    break;
}

// Los Switch también pueden ejecutar funciones, no solamente console.logs y también puedes tener 2 condiciones en un mismo if
