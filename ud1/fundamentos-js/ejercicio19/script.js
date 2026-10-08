// Calcula el promedio de una lista de números introducida por comas.
const salida = document.getElementById("resultado");

function leerLista(texto) {
  // Limpia espacios, convierte los elementos a Number y elimina entradas inválidas.
  return texto
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number)
    .filter((n) => !Number.isNaN(n));
}

function promedio(numeros) {
  // reduce() suma los elementos y el resultado se divide por la cantidad de valores.
  const suma = numeros.reduce((acumulado, n) => acumulado + n, 0);
  return suma / numeros.length;
}

document.getElementById("btnPromedio").addEventListener("click", () => {
  const numeros = leerLista(document.getElementById("lista").value);
  // Evita dividir entre cero si la entrada no contiene números válidos.
  if (numeros.length === 0) {
    salida.textContent = "Error: introduce al menos un número.";
    return;
  }
  salida.textContent = "Array: [" + numeros.join(", ") + "]\nPromedio: " + promedio(numeros);
});
