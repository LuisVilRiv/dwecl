// Encuentra todos los números primos desde 1 hasta el límite introducido.
const salida = document.getElementById("resultado");

function esPrimo(num) {
  // Los números menores que 2 no son primos.
  if (num < 2) return false;
  // Basta comprobar divisores hasta la raíz cuadrada del número.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

document.getElementById("btnPrimos").addEventListener("click", () => {
  const limite = Number(document.getElementById("limite").value);
  if (!Number.isInteger(limite) || limite < 2) {
    salida.textContent = "Error: introduce un entero mayor o igual que 2.";
    return;
  }

  // Se prueba cada candidato y se guarda solo si es primo.
  const primos = [];
  for (let n = 1; n <= limite; n++) {
    if (esPrimo(n)) primos.push(n);
  }
  console.log(primos);
  salida.textContent = "Primos entre 1 y " + limite + ":\n" + primos.join(", ");
});
