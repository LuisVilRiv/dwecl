const salida = document.getElementById("resultado");

document.getElementById("btnSumar").addEventListener("click", () => {
  const a = Number(prompt("Introduce el primer número:"));
  const b = Number(prompt("Introduce el segundo número:"));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error("Alguno de los valores no es un número válido");
    salida.textContent = "Error: introduce solo números.";
    return;
  }

  const suma = a + b;
  console.log("La suma de " + a + " y " + b + " es " + suma);
  salida.textContent = "La suma de " + a + " y " + b + " es " + suma;
});
