const salida = document.getElementById("resultado");

document.getElementById("btnComprobar").addEventListener("click", () => {
  const texto = document.getElementById("numero").value;
  const numero = Number(texto);

  if (texto === "" || !Number.isInteger(numero)) {
    salida.textContent = "Error: introduce un número entero.";
    return;
  }

  const tipo = numero % 2 === 0 ? "par" : "impar";
  salida.textContent = "El número " + numero + " es " + tipo;
});
