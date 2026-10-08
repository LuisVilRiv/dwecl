const salida = typeof document !== "undefined" ? document.getElementById("resultado") : null;

function mostrar(texto) {
  if (salida) salida.textContent = texto;
}

const numeros = [];
for (let i = 0; i < 100; i++) {
  numeros.push(Math.floor(Math.random() * 101)); // valores entre 0 y 100
}
console.table(numeros);

function filtrar(min, max) {
  const filtrados = numeros.filter((n) => n >= min && n <= max);
  console.table(filtrados);
  mostrar(
    "Valores entre " + min + " y " + max + ": " + filtrados.length + "\n" + filtrados.join(", ")
  );
}

if (typeof document !== "undefined") {
  document.getElementById("btnFiltrar").addEventListener("click", () => {
    const min = Number(document.getElementById("min").value);
    const max = Number(document.getElementById("max").value);
    filtrar(min, max);
  });
}
filtrar(40, 60);
