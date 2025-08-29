const { assert } = require("chai");     
const solution = require("../src/solution");  
const getAverage = require("../src/solution");
const procesarTarjeta = require("../src/solution");


describe("basic tests", function () {     
  it("should return 23 for input 10", function () {
    assert.strictEqual(solution(10), 23);  
  });
});

// Grupo de tests
describe("getAverage function", function () {
  
  it("should calculate the average of [92, 88, 12, 77, 57, 100, 67, 38, 97, 89]", function () {
    assert.strictEqual(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]), 71.7);
  });

  it("should calculate the average of [45, 87, 98, 100, 86, 94, 67, 88, 94, 95]", function () {
    assert.strictEqual(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]), 85.4);
  });

  it("should return the same number if array has only one element", function () {
    assert.strictEqual(getAverage([50]), 50);
  });

  it("should work with all 100s", function () {
    assert.strictEqual(getAverage([100, 100, 100, 100]), 100);
  });

});

describe("procesarTarjeta", () => {
  it("debe registrar TC En sucursal si la tarjeta es crédito", () => {
    const fakeTarjeta = () => "credito";
    const logCalls = [];
    const fakeLog = (...args) => logCalls.push(args);

    const fakeEsCredito = (t) => t === "credito";
    const fakeEsDebito = (t) => t === "debito";

    procesarTarjeta(fakeTarjeta, fakeLog, fakeEsCredito, fakeEsDebito);

    assert.deepEqual(logCalls[0], ['', 'Seguimiento De Tarjeta', 'TC En sucursal']);
  });

  it("debe registrar TD En sucursal si la tarjeta es débito", () => {
    const fakeTarjeta = () => "debito";
    const logCalls = [];
    const fakeLog = (...args) => logCalls.push(args);

    const fakeEsCredito = (t) => t === "credito";
    const fakeEsDebito = (t) => t === "debito";

    procesarTarjeta(fakeTarjeta, fakeLog, fakeEsCredito, fakeEsDebito);

    assert.deepEqual(logCalls[0], ['', 'Seguimiento De Tarjeta', 'TD En sucursal']);
  });

  it("debe registrar En sucursal sin datos si no es crédito ni débito", () => {
    const fakeTarjeta = () => "otro";
    const logCalls = [];
    const fakeLog = (...args) => logCalls.push(args);

    const fakeEsCredito = (t) => t === "credito";
    const fakeEsDebito = (t) => t === "debito";

    procesarTarjeta(fakeTarjeta, fakeLog, fakeEsCredito, fakeEsDebito);

    assert.deepEqual(logCalls[0], ['', 'Seguimiento De Tarjeta', 'En sucursal sin datos']);
  });
});