// Filtra los valores pares de una lista de números introducida por comas.
const salida = document.getElementById("resultado");

function leerLista(texto) {
  // Normaliza cada elemento y lo convierte a número antes del filtrado.
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function soloPares(numeros) {
  // Un número es par si la división entre dos no deja resto.
  return numeros.filter((n) => n % 2 === 0);
}

document.getElementById("btnFiltrar").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  salida.textContent = "Original: [" + numeros.join(", ") + "]\nPares: [" + soloPares(numeros).join(", ") + "]";
});
