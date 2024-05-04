"use strict";
const formulario = document.querySelector("#agregar-gasto");
const gastoListado = document.querySelector("#gastos ul");
// Eventos
eventListeners();
function eventListeners() {
    document.addEventListener("DOMContentLoaded", preguntarPresupuesto);
    if (formulario) {
        formulario.addEventListener("submit", agregarGasto);
    }
}
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }
    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }
    calcularRestante() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }
    eliminarGasto(id) {
        this.gastos = this.gastos.filter((gasto) => gasto.id !== id);
    }
}
class UI {
    insertarPresupuesto(cantidad) {
        const { presupuesto, restante } = cantidad;
        // Agregar al HTML
        const totalElement = document.querySelector("#total");
        const restanteElement = document.querySelector("#restante");
        if (totalElement && restanteElement) {
            totalElement.textContent = presupuesto.toString();
            restanteElement.textContent = restante.toString();
        }
    }
    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement("div");
        divMensaje.classList.add("text-center", "alert");
        if (tipo === "error") {
            divMensaje.classList.add("alert-danger");
        }
        else {
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
    agregarGastoListado(gastos) {
        this.limpiarHTML(); //elimina el html previo
        //iterar sobre los gastos
        gastos.forEach((gasto) => {
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
    actualizarRestante(restante) {
        const restanteElement = document.querySelector("#restante");
        if (restanteElement) {
            restanteElement.textContent = restante.toString();
        }
    }
    comprobarPresupuesto(presupuestoObj) {
        const { presupuesto, restante } = presupuestoObj;
        const restanteDiv = document.querySelector(".restante");
        //comprobar 25%
        if (presupuesto / 4 > restante) {
            restanteDiv === null || restanteDiv === void 0 ? void 0 : restanteDiv.classList.remove("alert-success", "alert-warning");
            restanteDiv === null || restanteDiv === void 0 ? void 0 : restanteDiv.classList.add("alert-danger");
        }
        else if (presupuesto / 2 > restante) {
            restanteDiv === null || restanteDiv === void 0 ? void 0 : restanteDiv.classList.remove("alert-success");
            restanteDiv === null || restanteDiv === void 0 ? void 0 : restanteDiv.classList.add("alert-warning");
        }
        if (restante <= 0) {
            ui.imprimirAlerta("El presupuesto se ha agotado", "error");
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}
//instancias
let presupuesto;
const ui = new UI();
//funciones
function preguntarPresupuesto() {
    const presupuestoUsuario = prompt("¿Cuál es tu presupuesto?");
    if (presupuestoUsuario === "" ||
        presupuestoUsuario === null ||
        isNaN(Number(presupuestoUsuario)) ||
        Number(presupuestoUsuario) <= 0) {
        window.location.reload();
        return;
    }
    // Presupuesto válido
    const presupuesto = new Presupuesto(Number(presupuestoUsuario));
    ui.insertarPresupuesto(presupuesto);
}
//agregar gastos
function agregarGasto(e) {
    e.preventDefault();
    //leer los dados del formulario
    const xd = document.querySelector("#gasto");
    const nombre = xd.nombre;
    const xd2 = document.querySelector("#cantidad");
    const cantidad = Number(xd2.value);
    //validar
    if (nombre === "") {
        ui.imprimirAlerta("Ambos campos son obligatorios", "error");
        return;
    }
    else if (cantidad <= 0 || isNaN(cantidad)) {
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
    formulario === null || formulario === void 0 ? void 0 : formulario.reset();
}
function eliminarGasto(id) {
    presupuesto.eliminarGasto;
    ui.agregarGastoListado;
}
