const salida = document.getElementById("resultado");

function contarVocales(palabra) {
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
  const palabra = document.getElementById("palabra").value.trim();
  salida.textContent = "La palabra \"" + palabra + "\" tiene " + contarVocales(palabra) + " vocales.";
});
