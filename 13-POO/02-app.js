"use strict";
class Cliente3 {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
    //Para mostrarse no requieren instancia
    static bienvenida() {
        return `Bienvenido al cajero`;
    }
}
//Herencia
class Empresa extends Cliente3 {
    constructor(nombre, saldo, telefono, categoria) {
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }
    //Reescribir metodo
    static bienvenida() {
        return `Bienvenido al cajero de empresa`;
    }
}
const juan = new Cliente3("Juan", 500);
const empresa = new Empresa("Codigo con Juan", 4000, "554-554-554", "Cursos en línea");
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());
console.log(Cliente3.bienvenida());
