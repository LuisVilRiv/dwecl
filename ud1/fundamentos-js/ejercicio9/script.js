// Invierte una cadena separándola en caracteres, reordenándolos y uniéndolos.
const salida = document.getElementById("resultado");

function revertir(cadena) {
  // reverse() modifica el array de caracteres, que luego se convierte de nuevo a texto.
  return cadena.split("").reverse().join("");
}

document.getElementById("btnRevertir").addEventListener("click", () => {
  const cadena = document.getElementById("cadena").value;
  salida.textContent = "Original: " + cadena + "\nInvertida: " + revertir(cadena);
});
