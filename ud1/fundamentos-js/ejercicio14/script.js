const salida = document.getElementById("resultado");

function esPalindromo(palabra) {
  // se ignoran mayúsculas y tildes para la comparación
  const limpia = palabra
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  const invertida = limpia.split("").reverse().join("");
  return limpia === invertida;
}

document.getElementById("btnComprobar").addEventListener("click", () => {
  const palabra = document.getElementById("palabra").value.trim();
  const resultado = esPalindromo(palabra) ? "SÍ" : "NO";
  salida.textContent = "\"" + palabra + "\" " + resultado + " es un palíndromo.";
});
