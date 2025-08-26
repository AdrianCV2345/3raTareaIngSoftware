import Hora from "./Hora.js";
import SaludoNombre from "./SaludoNombre.js";
import Genero from "./Genero.js";

const div = document.getElementById("app");
const nombreInput = document.getElementById("nombre");
const horaInput = document.getElementById("hora");
const generoInput = document.getElementById("genero");
const saludarBtn = document.getElementById("saludarBtn");

saludarBtn.addEventListener("click", () => {
  const saludoHora = new Hora(horaInput.value);
  const saludoNombre = new SaludoNombre(nombreInput.value);
  const saludoGenero = new Genero(generoInput.value);

  div.textContent = `${saludoHora.mostrar()}${saludoGenero.mostrar()}, ${saludoNombre.mostrar()}  Bienvenido!`;
});
