# Guía de uso de `calcularTotal`

## Propósito

`calcularTotal` calcula el importe final de un carrito. Suma el precio de cada producto multiplicado por su cantidad y aplica un descuento porcentual opcional.

## Firma

```js
calcularTotal(productos, descuento = 0)
```

## Parámetros

- `productos` (`Array`): arreglo de productos. Cada producto debe ser un objeto con:
  - `precio` (`number`): número finito no negativo.
  - `cantidad` (`number`): entero positivo.
- `descuento` (`number`, opcional): porcentaje de descuento, entre `0` y `100`. Su valor predeterminado es `0`.

## Validaciones y errores

La función lanza los siguientes errores cuando los datos no cumplen las condiciones esperadas:

- `TypeError: Los productos deben ser un arreglo` si `productos` no es un arreglo.
- `RangeError: El descuento debe estar entre 0 y 100` si `descuento` no es finito o está fuera del intervalo de `0` a `100`.
- `TypeError: Cada producto debe ser un objeto` si un elemento del arreglo es `null` o no es un objeto.
- `RangeError: El precio debe ser un número no negativo` si `precio` no es finito o es negativo.
- `RangeError: La cantidad debe ser un entero positivo` si `cantidad` no es un entero o es menor que `1`.

## Valor devuelto

Devuelve un `number` con el importe final después del descuento. El resultado se redondea a dos decimales. Un descuento del `100` por ciento devuelve `0`.

## Ejemplo

El siguiente ejemplo calcula un carrito con dos productos y un descuento del `10 %`:

```js
import { calcularTotal } from './src/carrito.js';

const productos = [
  { precio: 50, cantidad: 1 },
  { precio: 70, cantidad: 1 }
];

const total = calcularTotal(productos, 10);
console.log(total); // 108
```

El subtotal es `120` y, después de aplicar el `10 %` de descuento, el total es `108`.
