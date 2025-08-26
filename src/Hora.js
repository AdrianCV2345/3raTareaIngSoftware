export default class Hora {
  constructor(hora) {
    this.hora = parseInt(hora, 10);
  }

  mostrar() {
    if (isNaN(this.hora)) return "Hola";
    if (this.hora < 12) return "Buenos días";
    if (this.hora < 18) return "Buenas tardes";
    return "Buenas noches";
  }
}
