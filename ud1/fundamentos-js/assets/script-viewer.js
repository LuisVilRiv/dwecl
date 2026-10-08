(() => {
  const etiquetaScript = document.currentScript;
  const contenido = document.querySelector("main");

  if (!etiquetaScript || !contenido) {
    throw new Error("No se pudo inicializar el visor del script del ejercicio.");
  }

  const estilos = document.createElement("link");
  estilos.rel = "stylesheet";
  estilos.href = new URL("script-viewer.css", etiquetaScript.src).href;
  document.head.append(estilos);

  const seccion = document.createElement("section");
  seccion.className = "visor-script";
  seccion.setAttribute("aria-labelledby", "titulo-script");

  const titulo = document.createElement("h2");
  titulo.id = "titulo-script";
  titulo.textContent = "Script ejecutado";

  const estado = document.createElement("p");
  estado.className = "visor-script__estado";
  estado.setAttribute("role", "status");
  estado.setAttribute("aria-live", "polite");
  estado.textContent = "Cargando el código fuente...";

  const pre = document.createElement("pre");
  const codigo = document.createElement("code");
  pre.append(codigo);
  seccion.append(titulo, estado, pre);
  contenido.append(seccion);

  // Carga y muestra el mismo archivo JavaScript que usa esta página.
  const urlScript = new URL("script.js", window.location.href);
  fetch(urlScript)
    .then((respuesta) => {
      if (!respuesta.ok) {
        throw new Error(`No se pudo cargar ${urlScript.pathname} (HTTP ${respuesta.status}).`);
      }
      return respuesta.text();
    })
    .then((fuente) => {
      codigo.textContent = fuente;
      estado.textContent = "Este es el código fuente que se ejecuta en este ejercicio.";
    })
    .catch((error) => {
      estado.textContent = `No se pudo mostrar el código fuente: ${error.message}`;
      console.error("Error al cargar el código fuente del ejercicio:", error);
    });
})();
