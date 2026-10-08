const salida = document.getElementById("resultado");

function revertir(cadena) {
  return cadena.split("").reverse().join("");
}

document.getElementById("btnRevertir").addEventListener("click", () => {
  const cadena = document.getElementById("cadena").value;
  salida.textContent = "Original: " + cadena + "\nInvertida: " + revertir(cadena);
});
