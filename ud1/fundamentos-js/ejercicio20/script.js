// Convierte una cadena a mayúsculas y minúsculas sin alterar el valor original.
const salida = document.getElementById("resultado");

function convertir(cadena) {
  // Devuelve las dos versiones en un objeto para mostrarlas juntas.
  return {
    mayusculas: cadena.toUpperCase(),
    minusculas: cadena.toLowerCase(),
  };
}

document.getElementById("btnConvertir").addEventListener("click", () => {
  const cadena = document.getElementById("cadena").value;
  // La desestructuración extrae cada versión del objeto devuelto.
  const { mayusculas, minusculas } = convertir(cadena);
  salida.textContent = "Mayúsculas: " + mayusculas + "\nMinúsculas: " + minusculas;
});
