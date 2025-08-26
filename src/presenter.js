
//1) SALUDO HOLA
import Saludo from "./SaludoHola.js";
const saludo = new Saludo();
const div = document.getElementById("app");
div.textContent = saludo.mostrar();
