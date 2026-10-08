const salida = document.getElementById("resultado");

function palabraMasLarga(frase) {
  const palabras = frase.trim().split(/\s+/);
  let larga = "";
  for (let i = 0; i < palabras.length; i++) {
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
