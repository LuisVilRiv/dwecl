const salida = document.getElementById("resultado");

function contarPalabras(frase) {
  const palabras = frase.trim().split(/\s+/).filter((p) => p !== "");
  return palabras.length;
}

document.getElementById("btnContar").addEventListener("click", () => {
  const frase = document.getElementById("frase").value;
  salida.textContent = "La frase tiene " + contarPalabras(frase) + " palabras.";
});
