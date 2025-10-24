const listaPrecios = [
  { nombre: 'pan', precio: 30 },
  { nombre: 'azucar', precio: 220 },
  { nombre: 'cafe', precio: 140 },
  { nombre: 'manteca', precio: 190 },
  { nombre: 'leche', precio: 60 },
  { nombre: 'dulce de leche', precio: 90 },
];


/* listaPrecios.forEach((producto, indice) => {
  console.log(`${indice}: ${producto.nombre} vale ${producto.precio} `);
});

listaPrecios.forEach((producto) => {
  console.log(` ${producto.nombre} `);
  console.log(` ${producto.precio} `);
}); */



function prodDisponible(listado, pedido) {
  const prodEncontrado = listado.find((producto) => producto.nombre === pedido);
  if (prodEncontrado) {
    console.log(`Producto ${pedido} disponible`);
  } else {
    console.log(` Producto ${pedido} no disponible`);
  }
}

prodDisponible(listaPrecios, 'vino');

