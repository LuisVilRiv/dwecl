// Actualiza el contenido del título y los estilos elegidos en el formulario.
const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

document.getElementById("aplicar").addEventListener("click", () => {
  // textContent cambia el texto del título sin interpretar HTML.
  titulo.textContent = document.getElementById("nuevoTexto").value;

  // Las propiedades style modifican directamente los estilos CSS en línea.
  titulo.style.color = document.getElementById("color").value;
  parrafo.style.fontSize = document.getElementById("tamano").value + "px";
});
