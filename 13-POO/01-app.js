"use strict";
//Class declaration(Es la mas popular para definir una clase)
//-----------------------------------------------------------
class Cliente {
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
const gian = new Cliente("Gian", 4000);
console.log(gian);
console.log(gian.mostrarInformacion());
console.log(Cliente.bienvenida());
//Class expresion
//---------------
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`;
    }
};
const gian2 = new Cliente2("Gian", 8000);
console.log(gian2);
console.log(gian2.mostrarInformacion());
