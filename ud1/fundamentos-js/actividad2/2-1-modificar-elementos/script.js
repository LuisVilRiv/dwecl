const titulo = document.getElementById("titulo");
const parrafo = document.getElementById("parrafo");

document.getElementById("aplicar").addEventListener("click", () => {
  // Cambia el CONTENIDO del elemento HTML
  titulo.textContent = document.getElementById("nuevoTexto").value;

  // Cambia el CSS del elemento
  titulo.style.color = document.getElementById("color").value;
  parrafo.style.fontSize = document.getElementById("tamano").value + "px";
});
