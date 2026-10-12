/** Calcula el importe final de un carrito con descuento porcentual. */
function validarParametros(productos, descuento) {
  if (!Array.isArray(productos)) {
    throw new TypeError('Los productos deben ser un arreglo');
  }
  if (!Number.isFinite(descuento) || descuento < 0 || descuento > 100) {
    throw new RangeError('El descuento debe estar entre 0 y 100');
  }

}

function validarProducto(producto) {
    if (producto === null || typeof producto !== 'object') {
      throw new TypeError('Cada producto debe ser un objeto');
    }
    const { precio, cantidad } = producto;
    if (!Number.isFinite(precio) || precio < 0) {
      throw new RangeError('El precio debe ser un número no negativo');
    }
    if (!Number.isInteger(cantidad) || cantidad < 1) {
      throw new RangeError('La cantidad debe ser un entero positivo');
    }
  }

function calcularSubtotal(productos) {
  let subtotal = 0;
  for (const producto of productos) {
    validarProducto(producto);
    subtotal += producto.precio * producto.cantidad;
  }
  return subtotal;
}

export function calcularTotal(productos, descuento = 0) {
  validarParametros(productos, descuento);
  const subtotal = calcularSubtotal(productos);

  return Number((subtotal * (1 - descuento / 100)).toFixed(2));
}
