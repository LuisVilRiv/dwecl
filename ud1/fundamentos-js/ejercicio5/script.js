// Pide un entero y determina si es par o impar usando el resto de la división.
const salida = document.getElementById("resultado");

document.getElementById("btnComprobar").addEventListener("click", () => {
  // prompt() entrega texto, por eso se convierte antes de validar el entero.
  const numero = Number(prompt("Introduce un número entero:"));

  if (!Number.isInteger(numero)) {
    salida.textContent = "Error: introduce un número entero.";
    return;
  }

  // Un resto cero al dividir entre dos identifica los números pares.
  const tipo = numero % 2 === 0 ? "par" : "impar";
  console.log("El número " + numero + " es " + tipo);
  salida.textContent = "El número " + numero + " es " + tipo;
});
