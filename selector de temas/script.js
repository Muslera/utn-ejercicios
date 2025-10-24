// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  console.log("Selector de Temas cargado correctamente");

  // Obtener elementos del DOM
  const nombreInput = document.getElementById("nombreInput");
  const allBtn = document.querySelectorAll(".tema-btn");
  const temaClaroBtn = document.querySelector('[data-tema="claro"]');
  const temaOscuroBtn = document.querySelector('[data-tema="oscuro"]');
  const temaColoridoBtn = document.querySelector('[data-tema="colorido"]');
  const nombre = document.getElementById("nombre");
  const reset = document.getElementById("reset");

  // Función para actualizar el nombre
  function controlTexto() {
    let texto = nombreInput.value;
    if (texto) {
      nombre.textContent = texto;
    } else {
    nombre.textContent = "";
    nombreInput.value = "";
    }
  }
  // Función para cambiar el tema

  function cambioTema(activo) {
    tarjeta.className = "tarjeta";
    tarjeta.classList.add(activo);
  }

  // Función para resetear todo

  function quitarTema() {
    nombre.textContent = "";
    nombreInput.value = "";
    nombre.textContent = "Tu Nombre";
    tarjeta.className = "tarjeta";
  }
  // Conectar evento al input de nombre
  nombreInput.addEventListener("input", controlTexto);

  // Conectar eventos a los botones de tema
  temaClaroBtn.addEventListener("click", () => cambioTema("tema-claro"));
  temaOscuroBtn.addEventListener("click", () => cambioTema("tema-oscuro"));
  temaColoridoBtn.addEventListener("click", () => cambioTema("tema-colorido"));
  // Conectar evento al botón resetear
  reset.addEventListener("click", quitarTema);
});
