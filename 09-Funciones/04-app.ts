// Como se comunican las funciones entre si...

// Las funciones se van a comunicar, en lugar de tener una gran función con
//800 lineas es recomendable dividirla en pequeñas partes, realizan una operación
//y se van hacia la otra función...

iniciarApp();

function iniciarApp() {
  console.log("Iniciando App...");
  segundaFuncion();
}

function segundaFuncion() {
  console.log("Desde la segunda función...");
  usuarioAutenticado("Pablo");
}

function usuarioAutenticado(usuario:string) {
  console.log("Autenticando usuario...");
  console.log(`Usuario autenticado con éxito ${usuario} `);
}
