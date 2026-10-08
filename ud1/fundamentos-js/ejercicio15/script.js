const salida = document.getElementById("resultado");

function esPrimo(num) {
  if (num < 2) return false;
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

  const primos = [];
  for (let n = 1; n <= limite; n++) {
    if (esPrimo(n)) primos.push(n);
  }
  console.log(primos);
  salida.textContent = "Primos entre 1 y " + limite + ":\n" + primos.join(", ");
});
