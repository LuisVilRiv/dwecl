const salida = document.getElementById("resultado");

function leerLista(texto) {
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function mayoresQue(numeros, valor) {
  return numeros.filter((n) => n > valor);
}

document.getElementById("btnFiltrar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  const valor = Number(document.getElementById("valor").value);
  salida.textContent =
    "Original: [" + numeros.join(", ") + "]\nMayores que " + valor + ": [" + mayoresQue(numeros, valor).join(", ") + "]";
});
