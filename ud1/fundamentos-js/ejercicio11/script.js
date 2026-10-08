// Simula 100 extracciones de números del 1 al 20 y cuenta sus apariciones.
const salida = typeof document !== "undefined" ? document.getElementById("resultado") : null;

function mostrar(texto) {
  if (salida) salida.textContent = texto;
}

function generar() {
  const apariciones = {};
  // Cada número aleatorio incrementa su contador dentro del objeto.
  for (let i = 0; i < 100; i++) {
    const n = Math.floor(Math.random() * 20) + 1; // entre 1 y 20
    apariciones[n] = (apariciones[n] || 0) + 1;
  }

  // Las claves registradas corresponden a los números que aparecieron al menos una vez.
  const distintos = Object.keys(apariciones).length;
  let texto = "Números distintos que han aparecido al menos una vez: " + distintos + " de 20\n\n";
  for (let n = 1; n <= 20; n++) {
    texto += "El " + n + " ha aparecido " + (apariciones[n] || 0) + " veces\n";
  }
  console.log(texto);
  mostrar(texto);
}

generar();
if (typeof document !== "undefined") {
  document.getElementById("btnGenerar").addEventListener("click", generar);
}
