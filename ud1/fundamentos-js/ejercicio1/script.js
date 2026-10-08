// Recorre ejemplos de valores primitivos, especiales y compuestos.
const salida = typeof document !== "undefined" ? document.getElementById("resultado") : null;

function mostrar(texto) {
  if (salida) salida.textContent = texto;
}

function descripcion(valor) {
  // Convierte a texto valores que no se muestran bien con String(), como objetos o funciones.
  if (typeof valor === "symbol") return valor.toString();
  if (typeof valor === "function") return "[Function]";
  if (typeof valor === "object" && valor !== null) return JSON.stringify(valor);
  return String(valor);
}

function ejecutar() {
  // Cada constante ejemplifica un tipo de dato de JavaScript.
  const nombre = "Ana";
  const edad = 25;
  const altura = 1.68;
  const esEstudiante = true;
  let sinValor;
  const nulo = null;
  const id = Symbol("id");
  const grande = 12345678901234567890n;
  const lista = [1, 2, 3];
  const objeto = { clave: "valor" };
  const funcion = function () {};

  const primitivos = { nombre, edad, altura, esEstudiante };
  const especiales = { sinValor, nulo, id, grande };
  const compuestos = { lista, objeto, funcion };
  let texto = "";

  // Se agrupan los valores para mostrar cada conjunto con un método distinto de console.
  for (const [clave, valor] of Object.entries(primitivos)) {
    console.log(clave + ": " + descripcion(valor) + " -> " + typeof valor);
    texto += clave + ": " + descripcion(valor) + " -> " + typeof valor + "\n";
  }

  for (const [clave, valor] of Object.entries(especiales)) {
    console.info(clave + ": " + descripcion(valor) + " -> " + typeof valor);
    texto += clave + ": " + descripcion(valor) + " -> " + typeof valor + "\n";
  }

  for (const [clave, valor] of Object.entries(compuestos)) {
    console.debug(clave + ": " + descripcion(valor) + " -> " + typeof valor);
    texto += clave + ": " + descripcion(valor) + " -> " + typeof valor + "\n";
  }

  try {
    // La reasignación provoca un error porque nombre se declaró con const.
    nombre = "Otro"; // las constantes no se pueden reasignar
  } catch (error) {
    console.error("Error controlado:", error.message);
    texto += "Error controlado: " + error.message + "\n";
  }

  mostrar(texto);
}

ejecutar();
if (typeof document !== "undefined") {
  document.getElementById("btnEjecutar").addEventListener("click", ejecutar);
}
