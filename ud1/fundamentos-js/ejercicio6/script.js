// Lee un número del formulario y clasifica su paridad.
const salida = document.getElementById("resultado");

document.getElementById("btnComprobar").addEventListener("click", () => {
  const texto = document.getElementById("numero").value;
  // Se conserva el texto para distinguir un campo vacío de un cero válido.
  const numero = Number(texto);

  if (texto === "" || !Number.isInteger(numero)) {
    salida.textContent = "Error: introduce un número entero.";
    return;
  }

  // El resto de la división entre dos indica si el entero es par.
  const tipo = numero % 2 === 0 ? "par" : "impar";
  salida.textContent = "El número " + numero + " es " + tipo;
});
