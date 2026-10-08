const salida = document.getElementById("resultado");

function leerLista(texto) {
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function mayor(numeros) {
  return Math.max(...numeros);
}

document.getElementById("btnMax").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  if (numeros.length === 0) {
    salida.textContent = "Error: introduce al menos un número.";
    return;
  }
  salida.textContent = "Array: [" + numeros.join(", ") + "]\nEl número más grande es " + mayor(numeros);
});
