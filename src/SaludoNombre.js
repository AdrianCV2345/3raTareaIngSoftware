export default class SaludoNombre {
  constructor(nombre) {
    this.nombre = (nombre || "").trim();
  }

  mostrar() {
    return this.nombre;
  }
}
