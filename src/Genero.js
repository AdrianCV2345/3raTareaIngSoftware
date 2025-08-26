// Genero.js
export default class Genero {
  constructor(genero) {
    this.genero = (genero || "").toLowerCase().trim();
  }

  mostrar() {
    if (["f", "fem", "femenino", "mujer", "dama", "señorita", "srta"].includes(this.genero)) {
      return "dama";
    }
    if (["m", "masc", "masculino", "hombre", "caballero", "sr"].includes(this.genero)) {
      return "caballero";
    }
    return "invitado";
  }
}
