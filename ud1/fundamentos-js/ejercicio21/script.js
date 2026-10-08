// Filtra una lista para conservar solo los números mayores que el valor indicado.
const salida = document.getElementById("resultado");

function leerLista(texto) {
  // Convierte cada valor separado por comas a número y descarta los inválidos.
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function mayoresQue(numeros, valor) {
  // La comparación es estricta: los números iguales al límite no se incluyen.
  return numeros.filter((n) => n > valor);
}

document.getElementById("btnFiltrar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  const valor = Number(document.getElementById("valor").value);
  salida.textContent =
    "Original: [" + numeros.join(", ") + "]\nMayores que " + valor + ": [" + mayoresQue(numeros, valor).join(", ") + "]";
});
