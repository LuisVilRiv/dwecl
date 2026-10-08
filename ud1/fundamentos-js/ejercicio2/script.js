// Genera una muestra aleatoria y permite filtrar sus valores por un intervalo.
const salida = typeof document !== "undefined" ? document.getElementById("resultado") : null;

function mostrar(texto) {
  if (salida) salida.textContent = texto;
}

const numeros = [];
// Math.random() genera valores desde 0; se escala para obtener enteros de 0 a 100.
for (let i = 0; i < 100; i++) {
  numeros.push(Math.floor(Math.random() * 101)); // valores entre 0 y 100
}
console.table(numeros);

function filtrar(min, max) {
  // filter() conserva solo los números incluidos en ambos extremos del rango.
  const filtrados = numeros.filter((n) => n >= min && n <= max);
  console.table(filtrados);
  mostrar(
    "Valores entre " + min + " y " + max + ": " + filtrados.length + "\n" + filtrados.join(", ")
  );
}

// Conecta los campos del formulario y muestra un primer resultado por defecto.
if (typeof document !== "undefined") {
  document.getElementById("btnFiltrar").addEventListener("click", () => {
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);
    filtrar(min, max);
  });
}
filtrar(40, 60);
