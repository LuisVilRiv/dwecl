// Solicita dos valores al usuario, valida que sean números y presenta la suma.
const salida = document.getElementById("resultado");

document.getElementById("btnSumar").addEventListener("click", () => {
  // prompt() devuelve texto; Number() lo convierte para poder hacer la operación.
  const a = Number(prompt("Introduce el primer número:"));
  const b = Number(prompt("Introduce el segundo número:"));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Alguno de los valores no es un número válido");
    salida.textContent = "Error: introduce solo números.";
    return;
  }

  // Solo se suman los valores después de comprobar que ambos son numéricos.
  const suma = a + b;
  console.log("La suma de " + a + " y " + b + " es " + suma);
  salida.textContent = "La suma de " + a + " y " + b + " es " + suma;
});
