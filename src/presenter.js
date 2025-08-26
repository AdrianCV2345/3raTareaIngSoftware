import Hora from "./Hora.js";
import SaludoNombre from "./SaludoNombre.js";
import Genero from "./Genero.js";
import Edad from "./edad.js";

const div = document.getElementById("app");
const nombreInput = document.getElementById("nombre");
const horaInput = document.getElementById("hora");
const generoInput = document.getElementById("genero");
const edadInput = document.getElementById("edad");
const saludarBtn = document.getElementById("saludarBtn");

saludarBtn.addEventListener("click", () => {
  const saludoHora = new Hora(horaInput.value);
  const saludoNombre = new SaludoNombre(nombreInput.value);
  const saludoGenero = new Genero(generoInput.value);
  const generoNormalizado = saludoGenero.mostrar(); // "dama" | "caballero" | "invitado"
  const saludoEdad = new Edad(edadInput.value, generoNormalizado);

  div.textContent = `${saludoHora.mostrar()} ${saludoEdad.mostrar()} ${saludoNombre.mostrar()}, ¡Bienvenido!`;
});
