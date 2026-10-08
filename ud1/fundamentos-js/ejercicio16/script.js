// Convierte una temperatura en grados Celsius a grados Fahrenheit.
const salida = document.getElementById("resultado");

function celsiusAFahrenheit(celsius) {
  // Fórmula de conversión: Fahrenheit = Celsius × 9/5 + 32.
  return (celsius * 9) / 5 + 32;
}

document.getElementById("btnConvertir").addEventListener("click", () => {
  const texto = document.getElementById("celsius").value;
  if (texto === "") {
    salida.textContent = "Error: introduce una temperatura.";
    return;
  }
  // El campo vacío se valida antes de convertir la temperatura a número.
  const c = Number(texto);
  salida.textContent = c + " °C = " + celsiusAFahrenheit(c).toFixed(1) + " °F";
});
