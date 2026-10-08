// Genera un entero aleatorio dentro del intervalo inclusivo indicado.
const salida = document.getElementById("resultado");

function azar(min, max) {
  // Se escala Math.random() y se suma min para incluir ambos extremos.
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("btnAzar").addEventListener("click", () => {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  // Un intervalo invertido no permite generar un valor de forma coherente.
  if (min > max) {
    salida.textContent = "Error: el mínimo no puede ser mayor que el máximo.";
    return;
  }
  salida.textContent = "azar(" + min + ", " + max + ") -> " + azar(min, max);
});
