const salida = document.getElementById("resultado");

function leerLista(texto) {
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function soloPares(numeros) {
  return numeros.filter((n) => n % 2 === 0);
}

document.getElementById("btnFiltrar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  salida.textContent = "Original: [" + numeros.join(", ") + "]\nPares: [" + soloPares(numeros).join(", ") + "]";
});
