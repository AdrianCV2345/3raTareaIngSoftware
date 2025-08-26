
export default class Hora {
  constructor(hora, idioma = "es") {
    this.hora = Number(hora);
    this.idioma = (idioma || "es")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); 
  }

  mostrar() {
    const esIngles = ["en", "english", "ingles"].includes(this.idioma);
    const h = this.hora;

    if (!Number.isFinite(h) || h < 0 || h > 23) {
      return esIngles ? "Hello" : "Hola";
    }

    if (h < 12) return esIngles ? "Good morning"   : "Buenos días";
    if (h < 18) return esIngles ? "Good afternoon" : "Buenas tardes";
    return esIngles ? "Good evening" : "Buenas noches";
  }
}
