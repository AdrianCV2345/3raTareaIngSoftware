import Hora from "./Hora.js";
import SaludoNombre from "./SaludoNombre.js";

const div = document.getElementById("app");
const nombreInput = document.getElementById("nombre");
const horaInput = document.getElementById("hora");
const saludarBtn = document.getElementById("saludarBtn");

saludarBtn.addEventListener("click", () => {
  const saludoHora = new Hora(horaInput.value);
  const saludoNombre = new SaludoNombre(nombreInput.value);

  div.textContent = `${saludoHora.mostrar()}, ${saludoNombre.mostrar()} Bienvenido!`;
});
