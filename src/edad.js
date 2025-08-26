
export default class Edad {
  constructor(edad, generoNormalizado) {
    this.edad = parseInt(edad, 10);
    this.genero = (generoNormalizado || "").toLowerCase();
  }

  mostrar() {
    if (isNaN(this.edad)) return "invitado";

    if (this.edad <= 18) {
      if (this.genero === "dama") return "señorita";
      if (this.genero === "caballero") return "jovencito";
      return "";
    }

    if (this.edad >= 30) {
      if (this.genero === "dama") return "Sra.";
      if (this.genero === "caballero") return "Sr.";
      return "";
    }

    return "";
  }
}
