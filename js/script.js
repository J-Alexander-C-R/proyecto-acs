// Interactividad de la página ACS

// 1. Tema claro / oscuro (se recuerda en el navegador si es posible)
const btnTema = document.getElementById("btn-tema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  if (btnTema) btnTema.textContent = oscuro ? "☀️" : "🌙";
}

try {
  aplicarTema(localStorage.getItem("tema-acs") === "oscuro");
} catch (e) {
  aplicarTema(false);
}

if (btnTema) {
  btnTema.addEventListener("click", () => {
    const oscuro = !document.body.classList.contains("oscuro");
    aplicarTema(oscuro);
    try {
      localStorage.setItem("tema-acs", oscuro ? "oscuro" : "claro");
    } catch (e) {
      /* sin almacenamiento disponible */
    }
  });
}

// 2. Barra de progreso de lectura
const barra = document.getElementById("barra-progreso");
window.addEventListener("scroll", () => {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const avance = total > 0 ? (window.scrollY / total) * 100 : 0;
  if (barra) barra.style.width = avance + "%";
});

// 3. Resaltar en el menú la sección que se está leyendo
const enlaces = document.querySelectorAll(".menu a");
const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        enlaces.forEach((a) =>
          a.classList.toggle("activo", a.getAttribute("href") === "#" + entrada.target.id)
        );
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);
document.querySelectorAll("main section[id]").forEach((s) => observador.observe(s));

// 4. Diagrama de capas: al hacer clic en una capa se muestra su descripción
const infoCapa = document.getElementById("info-capa");
document.querySelectorAll("[data-capa]").forEach((capa) => {
  capa.addEventListener("click", () => {
    document.querySelectorAll("[data-capa]").forEach((c) => c.classList.remove("seleccionada"));
    capa.classList.add("seleccionada");
    if (infoCapa) infoCapa.innerHTML = capa.dataset.capa;
  });
});
