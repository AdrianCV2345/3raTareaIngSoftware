import Hora from "./Hora.js";

test("Buenos días en español para hora < 12", () => {
  const h = new Hora(9, "espanol");
  expect(h.mostrar()).toBe("Buenos días");
});

test("Good afternoon en inglés para hora entre 12 y 18", () => {
  const h = new Hora(15, "ingles");
  expect(h.mostrar()).toBe("Good afternoon");
});
