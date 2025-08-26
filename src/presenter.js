
//1) SALUDO HOLA
import Saludo from "./SaludoHola.js";
const saludo = new Saludo();
const div = document.getElementById("app");
div.textContent = saludo.mostrar();
//2)SALUDO POR NOMBRE
import Saludo from "./SaludoNombre.js";
const nombreInput = document.getElementById("nombre");
const saludarBtn = document.getElementById("saludarBtn");
saludarBtn.addEventListener("click", () => {
  const saludo = new Saludo(nombreInput.value);
  div.textContent = saludo.mostrar();
});