interface Informacion {
  nombre: string;
  tecnologias: string[];
  futbol?: boolean | null;
}

let dev: Informacion = {
  nombre: "ASDF",
  tecnologias: ["JAVA"],
  futbol: true,
};

function cv(programador: Informacion): void {
  console.log(programador.nombre);
}

cv(dev);
