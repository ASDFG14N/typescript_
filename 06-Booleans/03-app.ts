// Existe otra forma de comparar si un valor es verdadero y es por medio de algo llamado un operador ternario

const boolean10: boolean = true;
const boolean20: boolean = false;

if (boolean10) {
  console.log("si es true");
} else {
  console.log("no, no es true");
}

//El código anterior es fácil de leer no?, pero se puede simplificar un poco más
console.log(boolean10 ? "Si es true" : "No no es true");
