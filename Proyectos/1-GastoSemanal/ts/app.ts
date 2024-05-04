const formulario: HTMLFormElement | null | any =
  document.querySelector("#agregar-gasto");
const gastoListado: HTMLUListElement | null =
  document.querySelector("#gastos ul");

// Eventos
eventListeners();

function eventListeners() {
  document.addEventListener("DOMContentLoaded", preguntarPresupuesto);

  if (formulario) {
    formulario.addEventListener("submit", agregarGasto);
  }
}

class Presupuesto {
  presupuesto: number;
  restante: number;
  gastos: number[];
  constructor(presupuesto: number) {
    this.presupuesto = Number(presupuesto);
    this.restante = Number(presupuesto);
    this.gastos = [];
  }

  nuevoGasto(gasto:any) {
    this.gastos = [...this.gastos, gasto];
    this.calcularRestante();
  }

  calcularRestante() {
    const gastado = this.gastos.reduce(
      (total: number, gasto: any) => total + gasto.cantidad,
      0
    );
    this.restante = this.presupuesto - gastado;
  }

  eliminarGasto(id:number) {
    this.gastos = this.gastos.filter((gasto: any) => gasto.id !== id);
  }
}

class UI {
  insertarPresupuesto(cantidad: { presupuesto: number; restante: number }) {
    const { presupuesto, restante } = cantidad;
    // Agregar al HTML
    const totalElement = document.querySelector("#total");
    const restanteElement = document.querySelector("#restante");

    if (totalElement && restanteElement) {
      totalElement.textContent = presupuesto.toString();
      restanteElement.textContent = restante.toString();
    }
  }

  imprimirAlerta(mensaje: string, tipo: string) {
    // Crear el div
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert");

    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }

    // Mensaje de error
    divMensaje.textContent = mensaje;

    // Insertar en el HTML
    const formulario = document.querySelector("#agregar-gasto");
    if (formulario) {
      const contenedor = formulario.parentElement;
      if (contenedor) {
        contenedor.insertBefore(divMensaje, formulario);
      }
    }

    // Quitar del HTML después de 3 segundos
    setTimeout(() => {
      divMensaje.remove();
    }, 3000);
  }

  agregarGastoListado(gastos:any) {
    this.limpiarHTML(); //elimina el html previo

    //iterar sobre los gastos
    gastos.forEach((gasto:any) => {
      const { cantidad, nombre, id } = gasto;

      //crear un li
      const nuevoGasto = document.createElement("li");
      nuevoGasto.className =
        "list-group-item d-flex justify-content-between align-items-center";
      nuevoGasto.dataset.id = id;

      //agregar el html del gasto
      nuevoGasto.innerHTML = `
                ${nombre} <span class="badge badge-primary badge-pill">S/ ${cantidad}</span>
            `;

      //boton para borrar el gasto
      const btnBorrar = document.createElement("button");
      btnBorrar.classList.add("btn", "btn-danger", "borrar-gasto");
      btnBorrar.textContent = "Borrar";
      btnBorrar.onclick = () => {
        eliminarGasto(id);
      };
      nuevoGasto.appendChild(btnBorrar);

      const gastoListado = document.querySelector("#gastos ul");
      if (gastoListado) {
        gastoListado.appendChild(nuevoGasto);
      }
    });
  }

  limpiarHTML() {
    const gastoListado = document.querySelector("#gastos ul");
    if (gastoListado) {
      while (gastoListado.firstChild) {
        gastoListado.removeChild(gastoListado.firstChild);
      }
    }
  }

  actualizarRestante(restante: number) {
    const restanteElement = document.querySelector("#restante");
    if (restanteElement) {
      restanteElement.textContent = restante.toString();
    }
  }

  comprobarPresupuesto(presupuestoObj:any) {
    const { presupuesto, restante } = presupuestoObj;
    const restanteDiv = document.querySelector(".restante");

    //comprobar 25%
    if (presupuesto / 4 > restante) {
      restanteDiv?.classList.remove("alert-success", "alert-warning");
      restanteDiv?.classList.add("alert-danger");
    } else if (presupuesto / 2 > restante) {
      restanteDiv?.classList.remove("alert-success");
      restanteDiv?.classList.add("alert-warning");
    }

    if (restante <= 0) {
      ui.imprimirAlerta("El presupuesto se ha agotado", "error");
      formulario.querySelector('button[type="submit"]').disabled = true;
    }
  }
}

//instancias
let presupuesto:Presupuesto;
const ui = new UI();

//funciones

function preguntarPresupuesto() {
  const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");

  if (
    presupuestoUsuario === "" ||
    presupuestoUsuario === null ||
    isNaN(Number(presupuestoUsuario)) ||
    Number(presupuestoUsuario) <= 0
  ) {
    window.location.reload();
    return;
  }

  // Presupuesto válido
  const presupuesto = new Presupuesto(Number(presupuestoUsuario));
  ui.insertarPresupuesto(presupuesto);
}

//agregar gastos
function agregarGasto(e:Event) {
  e.preventDefault();
  //leer los dados del formulario
  const xd: any = document.querySelector("#gasto");
  const nombre: string = xd.nombre;
  const xd2: any = document.querySelector("#cantidad");
  const cantidad = Number(xd2.value);

  //validar
  if (nombre === "") {
    ui.imprimirAlerta("Ambos campos son obligatorios", "error");
    return;
  } else if (cantidad <= 0 || isNaN(cantidad)) {
    ui.imprimirAlerta("Cantidad no válida", "error");
    return;
  }
  console.log("Agregando gastos...");
  //generar un objeto con el gasto
  const gasto = { nombre, cantidad, id: Date.now() };

  //añade un nuevo gasto
  presupuesto.nuevoGasto(gasto);

  ui.imprimirAlerta("Gasto agregado correctamente", "");

  //imprimir los gastos
  const { gastos, restante } = presupuesto;
  ui.agregarGastoListado(gastos);

  ui.actualizarRestante(restante);

  ui.comprobarPresupuesto(presupuesto);

  //reinicia el formulario
  formulario?.reset();
}

function eliminarGasto(id:number) {
  presupuesto.eliminarGasto;
  ui.agregarGastoListado;
}
