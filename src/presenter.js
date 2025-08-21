import sumar from "./sumador";

const nombre = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");
const divSaludoHora = document.querySelector("#saludo-hora-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const hora = new Date().getHours();
  if (hora < 12) {
    divSaludoHora.innerHTML = "<p>¡Buenos días!<p>";
  } else if (hora < 18) {
    divSaludoHora.innerHTML = "<p>¡Buenas tardes!<p>";
  } else {
    divSaludoHora.innerHTML = "<p>¡Buenas noches!<p>";
  }
    div.innerHTML = "<p> " + nombre.value + "!<p>";

});
 