const salida = document.getElementById("resultado");

function azar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.getElementById("btnAzar").addEventListener("click", () => {
  const min = Number(document.getElementById("min").value);
  const max = Number(document.getElementById("max").value);

  if (min > max) {
    salida.textContent = "Error: el mínimo no puede ser mayor que el máximo.";
    return;
  }
  salida.textContent = "azar(" + min + ", " + max + ") -> " + azar(min, max);
});
