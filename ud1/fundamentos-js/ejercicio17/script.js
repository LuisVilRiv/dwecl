// Ordena numéricamente una lista de valores separada por comas.
const salida = document.getElementById("resultado");

function leerLista(texto) {
  // Convierte el texto del campo en un array y descarta entradas no numéricas.
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function ordenar(numeros) {
  // sort() compara números con a - b; la copia evita modificar el array original.
  return [...numeros].sort((a, b) => a - b);
}

document.getElementById("btnOrdenar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  salida.textContent = "Original: [" + numeros.join(", ") + "]\nOrdenado: [" + ordenar(numeros).join(", ") + "]";
});
