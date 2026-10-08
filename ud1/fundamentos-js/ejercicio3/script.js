// Define un objeto persona y muestra sus propiedades y métodos en la consola.
const salida = typeof document !== "undefined" ? document.getElementById("resultado") : null;

function mostrar(texto) {
  if (salida) salida.textContent = texto;
}

const persona = {
  // El objeto reúne valores primitivos, una lista, otro objeto y una función.
  nombre: "Ana",
  apellidos: "García López",
  edad: 25,
  altura: 1.68,
  esEstudiante: true,
  telefono: null,
  segundoNombre: undefined,
  aficiones: ["leer", "correr", "programar"],
  direccion: {
    calle: "Calle Mayor",
    numero: 12,
    ciudad: "Granada",
  },
  saludar: function () {
    return "Hola, soy " + this.nombre;
  },
};

function ejecutar() {
  // log() muestra el objeto y table() presenta sus propiedades en formato tabular.
  console.log(persona);
  console.table(persona);
  console.table(persona.aficiones);
  console.table(persona.direccion);
  console.log(persona.saludar());
  // JSON.stringify() permite imprimir las propiedades como texto legible.
  mostrar(JSON.stringify(persona, null, 2) + "\n" + persona.saludar());
}

ejecutar();
if (typeof document !== "undefined") {
  document.getElementById("btnEjecutar").addEventListener("click", ejecutar);
}
