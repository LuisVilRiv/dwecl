// Lee una lista de números y localiza el valor mayor con Math.max().
const salida = document.getElementById("resultado");

function leerLista(texto) {
  // Divide la entrada por comas, limpia espacios y descarta elementos no numéricos.
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function mayor(numeros) {
  // El operador spread pasa cada elemento del array como argumento a Math.max().
  return Math.max(...numeros);
}

document.getElementById("btnMax").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  // Math.max() no puede encontrar un máximo si no hay números.
  if (numeros.length === 0) {
    salida.textContent = "Error: introduce al menos un número.";
    return;
  }
  salida.textContent = "Array: [" + numeros.join(", ") + "]\nEl número más grande es " + mayor(numeros);
});
