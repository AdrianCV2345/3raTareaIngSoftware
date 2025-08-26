import Hora from "./Hora.js";
import SaludoNombre from "./SaludoNombre.js";
import Genero from "./Genero.js";
import Edad from "./edad.js"; 

const div = document.getElementById("app");
const nombreInput = document.getElementById("nombre");
const horaInput = document.getElementById("hora");
const generoInput = document.getElementById("genero");
const edadInput = document.getElementById("edad");
const idiomaSelect = document.getElementById("Idioma"); 
const saludarBtn = document.getElementById("saludarBtn");

saludarBtn.addEventListener("click", () => {
  const idioma = (idiomaSelect?.value || "espanol").toLowerCase();

  const saludoHora   = new Hora(horaInput.value, idioma);
  const saludoNombre = new SaludoNombre(nombreInput.value);

  const saludoGenero = new Genero(generoInput.value);
  const generoNormalizado = saludoGenero.mostrar(); 

  const saludoEdad = new Edad(edadInput.value, generoNormalizado);

  const bienvenida = ["en", "english", "ingles"].includes(
    idioma.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  )
    ? "Welcome!"
    : "¡Bienvenido!";

  div.textContent = `${saludoHora.mostrar()} ${saludoEdad.mostrar()} ${saludoNombre.mostrar()}, ${bienvenida}`;
});
