const salida = document.getElementById("resultado");

document.getElementById("btnComprobar").addEventListener("click", () => {
  const numero = Number(prompt("Introduce un número entero:"));

  if (!Number.isInteger(numero)) {
    salida.textContent = "Error: introduce un número entero.";
    return;
  }

  const tipo = numero % 2 === 0 ? "par" : "impar";
  console.log("El número " + numero + " es " + tipo);
  salida.textContent = "El número " + numero + " es " + tipo;
});
