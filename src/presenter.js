import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const saludoGenero = document.querySelector("#genero");

form.addEventListener("submit", (event) => {
  event.preventDefault();
    const genero = saludoGenero.value;
    if (genero === "masculino") {
      div.innerHTML += "¡Hola, caballero! " + nombre.value;
    } else {
      div.innerHTML += "¡Hola, dama! " + nombre.value;
    }
});
 