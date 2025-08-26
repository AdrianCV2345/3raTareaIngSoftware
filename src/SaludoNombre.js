export default class Saludo {
    constructor(nombre) {
        this.nombre = nombre;
    }
  mostrar() {
    return `Hola, ${this.nombre}! Bienvenido`;
  }
  
}
