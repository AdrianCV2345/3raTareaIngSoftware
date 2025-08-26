import Edad from "./edad.js";

test("menor de edad y dama devuelve señorita", () => {
  const e = new Edad(16, "dama");
  expect(e.mostrar()).toBe("señorita");
});

test("mayor de 30 y caballero devuelve Sr.", () => {
  const e = new Edad(40, "caballero");
  expect(e.mostrar()).toBe("Sr.");
});
