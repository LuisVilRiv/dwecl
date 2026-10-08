const salida = document.getElementById("resultado");

function convertir(cadena) {
  return {
    mayusculas: cadena.toUpperCase(),
    minusculas: cadena.toLowerCase(),
  };
}

document.getElementById("btnConvertir").addEventListener("click", () => {
  const cadena = document.getElementById("cadena").value;
  const { mayusculas, minusculas } = convertir(cadena);
  salida.textContent = "Mayúsculas: " + mayusculas + "\nMinúsculas: " + minusculas;
});
