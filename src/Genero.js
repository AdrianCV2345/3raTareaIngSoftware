export default class Genero {
  constructor(genero) {
    this.genero = (genero || "").trim();
  }

  mostrar() {
    if(this.genero === "masculino") {
      return " caballero";
    } else if(this.genero === "femenino") {
      return " dama";
    }
    return " invitado";
  }
}
