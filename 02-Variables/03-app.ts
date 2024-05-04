//Booleanos
let universitario: boolean = true;
if (universitario) {
  console.log("Es un universitario");
} else {
  console.log("No es un universitario");
}

//Numbers
let edad: number = 18;
function mayorDeEdad(edad: number): void {
  edad >= 18
    ? console.log("Es mayor de edad")
    : console.log("No es mayor de edad");
}
mayorDeEdad(edad);

//String
const nombre: string = "ASDF";
console.log(`El nombre es: ${nombre}`);

//Varios tipos
let lenguaje: string | null | undefined;
lenguaje = null;
console.log(lenguaje);
