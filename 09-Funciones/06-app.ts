// Métodos de propiedad, es decir son funciones con una sintaxis similar a las de un método..

// también llegan a ser muy comunes sobretodo porque es un objeto grande con todas las funciones...

const reproductor = {
  reproducir: (id: number) => {
    console.log(`Reproduciendo canción id ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },
  borrar: function (id:number) {
    console.log(`Borrando canción con id: ${id}`);
  },
  crearPlaylist: function (nombre:string) {
    console.log(`Creando la Playlist ${nombre}`);
  },
  reproducirPlaylist: function (nombre:string) {
    console.log(`Reproduciendo la Playlist ${nombre}`);
  },
};
reproductor.reproducir(30);
reproductor.pausar();

// Tambien los métodos pueden quedarse por fuera
// reproductor.borrar = function(id) {

// }
reproductor.borrar(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.reproducirPlaylist("Heavy Metal");
