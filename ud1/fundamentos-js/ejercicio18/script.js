// Busca la palabra de mayor longitud dentro de una frase.
const salida = document.getElementById("resultado");

function palabraMasLarga(frase) {
  // Separa la frase por espacios y conserva la palabra más larga encontrada.
  const palabras = frase.trim().split(/\s+/);
  let larga = "";
  for (let i = 0; i < palabras.length; i++) {
    // Solo se reemplaza el resultado cuando aparece una palabra más larga.
    if (palabras[i].length > larga.length) {
      larga = palabras[i];
    }
  }
  return larga;
}

document.getElementById("btnBuscar").addEventListener("click", () => {
  const frase = document.getElementById("frase").value;
  const larga = palabraMasLarga(frase);
  if (larga === "") {
    salida.textContent = "Error: escribe una frase.";
    return;
  }
  salida.textContent = "La palabra más larga es \"" + larga + "\" (" + larga.length + " letras).";
});
