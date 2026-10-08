// Comprueba si una palabra se lee igual de izquierda a derecha que al revés.
const salida = document.getElementById("resultado");

function esPalindromo(palabra) {
  // Normaliza el texto para que las mayúsculas y las tildes no afecten la comparación.
  const limpia = palabra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  // Invierte la palabra normalizada y compara ambas versiones.
  const invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

document.getElementById("btnComprobar").addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.trim();
  const resultado = esPalindromo(palabra) ? "SÍ" : "NO";
  salida.textContent = "\"" + palabra + "\" " + resultado + " es un palíndromo.";
});
