import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  div.innerHTML = "<p>Hola, " + nombre.value + "!</p>";
});
