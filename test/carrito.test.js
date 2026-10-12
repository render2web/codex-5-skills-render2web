import test from 'node:test';
import assert from 'node:assert/strict';
import { calcularTotal } from '../src/carrito.js';

test('calcula un carrito sin descuento', () => {
  assert.equal(calcularTotal([{ precio: 50, cantidad: 2 }]), 100);
});

test('calcula el total de un carrito con dos productos', () => {
  assert.equal(
    calcularTotal([
      { precio: 50, cantidad: 2 },
      { precio: 20, cantidad: 1 }
    ]),
    120
  );
});

test('un descuento del 100 por ciento devuelve cero', () => {
  assert.equal(calcularTotal([{ precio: 50, cantidad: 2 }], 100), 0);
});

test('rechaza un descuento negativo', () => {
  assert.throws(
    () => calcularTotal([{ precio: 10, cantidad: 1 }], -1),
    RangeError
  );
});

test('aplica un descuento porcentual', () => {
  assert.equal(calcularTotal([{ precio: 20, cantidad: 3 }], 25), 45);
});

test('rechaza cantidades inválidas', () => {
  assert.throws(
    () => calcularTotal([{ precio: 10, cantidad: 0 }]),
    RangeError
  );
});
