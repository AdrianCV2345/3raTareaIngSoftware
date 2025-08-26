import {dividir} from "./calculadora.js";

test("debe dividir dos numeros", () => {
  expect(dividir(6, 3)).toEqual(2);
});

test("debe dividir dos numeros cualquiera", () => {
  expect(dividir(10, 2)).toEqual(5);
});
