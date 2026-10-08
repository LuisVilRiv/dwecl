// Cuenta palabras separadas por uno o varios espacios en blanco.
const salida = document.getElementById("resultado");

function contarPalabras(frase) {
  // trim() quita espacios exteriores y la expresión regular agrupa espacios repetidos.
  const palabras = frase.trim().split(/\s+/).filter((p) => p !== "");
  return palabras.length;
}

document.getElementById("btnContar").addEventListener("click", () => {
  const frase = document.getElementById("frase").value;
  salida.textContent = "La frase tiene " + contarPalabras(frase) + " palabras.";
});
