/*
Tu tarea es simular el proceso de una caja registradora en un negocio. El programa tiene dos partes:
Registro de Productos: 
Pedir al cliente que ingrese, uno por uno, los nombres de los productos que desea comprar.
Cálculo del Total: 
Usar una lista de precios fija para encontrar el precio de cada producto ingresado y calcular el monto total a pagar.
Revisa y ejecuta el código en la consola del navegador.
*/
const listaPrecios = [
  { nombre: "pan", precio: 30 },
  { nombre: "azucar", precio: 220 },
  { nombre: "cafe", precio: 140 },
  { nombre: "manteca", precio: 190 },
  { nombre: "leche", precio: 60 },
  { nombre: "dulce de leche", precio: 90 },
];
/* 
Función registrarProductos():
Ejecuta esta función para empezar a ingresar productos.
Ingresa productos como: pan, leche, cafe, etc. (Debe ser idéntico al nombre en la lista de precios).
Para finalizar la compra, escribe un punto: .
*/
const compraCliente = [];

let registrarProductos = function (listaPrecios) {
  // activa el while
  let comprando = true;
  while (comprando) {
    let producto = prompt(
      "Ingresa el producto. Finaliza la compra escribiendo un punto"
    );
    //   convierto los caracteres a minusculas
    //   evito el ingreso de espacios dobles entre palabras
    //   quito los espacios en blanco al principio y al final
    //   ante el ingreso de espacios en blanco sin texto / considero string vacio
    const productoFiltrado = producto.replace(/\s+/g, " ").trim().toLowerCase();
    // registra el ingreso de un punto en cualquier parte del texto
    const ultimoPunto = productoFiltrado.lastIndexOf(".");
    if (ultimoPunto !== -1) {
      // el punto finaliza la compra
      // desactiva el while
      comprando = false;
    }
    // el cliente no ingresa un string vacio
    else if (productoFiltrado !== "") {
      // revisar si el producto solicitado esta en listaPrecios[]
      const prodEncontrado = listaPrecios.find(
        (producto) => producto.nombre === productoFiltrado
      );
      if (prodEncontrado) {
        // el producto solicitado esta en listaPrecios[]
        compraCliente.push(productoFiltrado);
        console.log(`Se agrega ${prodEncontrado.nombre}`);
        console.log(`Se suman $${prodEncontrado.precio}`);
        // el producto se ingresa a la compra
      } else {
        // el producto solicitado no esta en listaPrecios[]
        alert(` Producto ${productoFiltrado} no disponible`);
      }
    } else {
      // el cliente ingresa un string vacio o con solo espacios en blanco
      alert("Por favor, ingrese un producto de la lista");
    }
  }
  return compraCliente;
};

const productosRegistrados = registrarProductos(listaPrecios);
console.log(`productos comprados ${productosRegistrados}`);

/* 
Función calcularTotal():
Una vez que termines de ingresar productos, esta función se llamará automáticamente con tu lista de compra.
Verifica cómo se usa la lista de precios (listaPrecios) para encontrar el valor de cada ítem.
Presta especial atención a cómo el código maneja los productos que no se encuentran en la lista de precios.
*/
// el parametro productos, al llamar la funcion, va a ser el array productosRegistrados
// el parametro precios, al llamar la funcion, va a ser el objeto listaPrecios
let calcularTotal = function (productos, listaPrecios) {
  let totalCompra = 0;

  productos.forEach((producto) => {
    // buscar el producto solicitado en la lista / buscar el precio
    listaPrecios.some(function (objetos) {
      if (objetos.nombre === producto) {
        console.log(
          `Se compro ${objetos.nombre}. Su precio es de ${objetos.precio}`
        );
        totalCompra += objetos.precio;
      }
    });
  });
  console.log(`EL total a pagar es: ${totalCompra}`);

  const productosCliente = productosRegistrados.map((palabra) => {
    return (
      ` ` + palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    );
  });
  alert(
    `usted compró los siguientes productos: ${productosCliente}. El total a pagar es de $${totalCompra} `
  );

  return totalCompra;
};
// por que esto da el mismo output?
// calcularTotal(compraCliente, listaPrecios);
calcularTotal(productosRegistrados, listaPrecios);
