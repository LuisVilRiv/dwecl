// Guarda las preferencias del usuario en cookies y las aplica al volver a la página.
const NOMBRES = ["tema", "idioma", "fuente"];
const DIAS = 30;

function setCookie(nombre, valor, dias) {
  // La fecha de expiración se calcula en milisegundos desde la fecha actual.
  const caduca = new Date(Date.now() + dias * 24 * 60 * 60 * 1000);
  // encodeURIComponent evita que caracteres especiales rompan el formato de la cookie.
  document.cookie =
    nombre + "=" + encodeURIComponent(valor) +
    "; expires=" + caduca.toUTCString() +
    "; path=/; SameSite=Lax";
}

function getCookie(nombre) {
  // Recorre las cookies hasta encontrar la que coincide con el nombre solicitado.
  const pares = document.cookie.split("; ");
  for (const par of pares) {
    const [clave, valor] = par.split("=");
    if (clave === nombre) return decodeURIComponent(valor);
  }
  return null;
}

function borrarCookie(nombre) {
  // Una fecha pasada hace que el navegador elimine la cookie.
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function aplicar(prefs) {
  // Traduce las opciones guardadas a estilos y mensajes visibles.
  const tamanos = { pequena: "14px", normal: "17px", grande: "22px" };
  const mensajes = {
    es: "¡Bienvenido de nuevo! Ya tenemos tus preferencias guardadas.",
    en: "Welcome back! Your preferences are already saved.",
    fr: "Bon retour ! Vos préférences sont déjà enregistrées.",
  };
  document.body.dataset.tema = prefs.tema;
  document.body.style.fontSize = tamanos[prefs.fuente];
  document.getElementById("mensaje").textContent = mensajes[prefs.idioma];
  document.getElementById("resultado").textContent = document.cookie.split("; ").join("\n");
}

function iniciar() {
  // Comprueba si ya se han guardado todas las preferencias del formulario.
  const prefs = {};
  for (const nombre of NOMBRES) prefs[nombre] = getCookie(nombre);

  const tieneTodas = NOMBRES.every((nombre) => prefs[nombre] !== null);
  document.getElementById("formulario").hidden = tieneTodas;
  document.getElementById("bienvenida").hidden = !tieneTodas;

  if (tieneTodas) {
    aplicar(prefs);
  } else {
    document.body.removeAttribute("data-tema");
    document.body.style.fontSize = "";
  }
}

document.getElementById("guardar").addEventListener("click", () => {
  // Guarda cada opción seleccionada y vuelve a aplicar el estado actualizado.
  for (const nombre of NOMBRES) {
    setCookie(nombre, document.getElementById(nombre).value, DIAS);
  }
  iniciar();
});

document.getElementById("borrar").addEventListener("click", () => {
  NOMBRES.forEach(borrarCookie);
  iniciar();
});

iniciar(); // al cargar (o recargar) la página se leen las cookies
