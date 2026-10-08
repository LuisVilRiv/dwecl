const salida = document.getElementById("resultado");

function leerLista(texto) {
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function ordenar(numeros) {
  return [...numeros].sort((a, b) => a - b);
}

document.getElementById("btnOrdenar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  salida.textContent = "Original: [" + numeros.join(", ") + "]\nOrdenado: [" + ordenar(numeros).join(", ") + "]";
});
