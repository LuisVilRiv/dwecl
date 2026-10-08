// Cuenta las vocales de una palabra, incluyendo vocales acentuadas.
const salida = document.getElementById("resultado");

function contarVocales(palabra) {
  // includes() permite comprobar cada letra contra el conjunto de vocales.
  const vocales = "aeiouáéíóúü";
  let total = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (vocales.includes(palabra[i].toLowerCase())) {
      total++;
    }
  }
  return total;
}

document.getElementById("btnContar").addEventListener("click", () => {
  // trim() elimina espacios al principio y al final antes del recuento.
  const palabra = document.getElementById("palabra").value.trim();
  salida.textContent = "La palabra \"" + palabra + "\" tiene " + contarVocales(palabra) + " vocales.";
});
