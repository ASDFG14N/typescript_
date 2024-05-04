// Algunas veces vas a desear que tu código se ejecute basado en una condición

// Cuando vas a un cajero, lo primero que haces es insertar tu tarjeta..

// Segundo colocas tu número, si el número esta bien, puedes continuar, sino, te dice que hubo un error

// Después eliges la operación que deseas hacer, si quieres retirar dinero, el cajero va a revisar que tengas primero esa cantidad, no puedes retirar una cantidad que no tienes..

// Lo mismo pasa en programación, si no eres amigo de alguien en facebook, no lo puedes contactar o escribir, dependiendo de la configuración tal vez tampoco puedas darle me gusta  a su foto de perfil... también si no eres usuario de este curso  no podrías verlo salvo que lo hayas descargado de internet.

// Y para ejecutar nuestro código basado en una condición, se utilizan las estructuras de control...

// Operador if
const puntaje1: number = 1000;

// es igual
if (puntaje1 == 1000) {
  console.log("Si es igual!");
} else {
  console.log("No no es igual");
}

// Si esta condición se cumple se ejecutará el código, pero que pasa si no se cumple???

// No es igual
if (puntaje1 != 1000) {
  console.log("Si! es diferente!");
} else {
  console.log("No, no es diferente");
}
// comparador estricto de tipo y valor
if (puntaje1 === 1000) {
  console.log("Si es igual!");
} else {
  console.log("No no es igual");
}

// comparador estricto de tipo y valor
if (puntaje1 !== 1000) {
  console.log("Si es DIFERENTE (ESTRICTO) !");
} else {
  console.log("No no es igual");
}
