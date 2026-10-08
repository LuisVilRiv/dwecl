const NOMBRES = ["tema", "idioma", "fuente"];
const DIAS = 30;

function setCookie(nombre, valor, dias) {
  const caduca = new Date(Date.now() + dias * 24 * 60 * 60 * 1000);
  document.cookie =
    nombre + "=" + encodeURIComponent(valor) +
    "; expires=" + caduca.toUTCString() +
    "; path=/; SameSite=Lax";
}

function getCookie(nombre) {
  const pares = document.cookie.split("; ");
  for (const par of pares) {
    const [clave, valor] = par.split("=");
    if (clave === nombre) return decodeURIComponent(valor);
  }
  return null;
}

function borrarCookie(nombre) {
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
}

function aplicar(prefs) {
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
