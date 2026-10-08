const salida = document.getElementById("resultado");

function celsiusAFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

document.getElementById("btnConvertir").addEventListener("click", () => {
  const texto = document.getElementById("celsius").value;
  if (texto === "") {
    salida.textContent = "Error: introduce una temperatura.";
    return;
  }
  const c = Number(texto);
  salida.textContent = c + " °C = " + celsiusAFahrenheit(c).toFixed(1) + " °F";
});
