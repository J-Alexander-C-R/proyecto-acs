# Proyecto ACS de John Cedano

Página web que resume la sección 22.3 del libro de Pressman sobre la Administración de la Configuración del Software (ACS).
Explica cómo se controlan los cambios y las versiones de un software.

- **Página publicada:** https://j-alexander-c-r.github.io/proyecto-acs/
- **Repositorio:** https://github.com/J-Alexander-C-R/proyecto-acs

## Integrante

- **John Alexander Cedano** — Matrícula: 2023-3781

## Objetivo

El objetivo fue entender qué es la ACS y ponerla en práctica usando Git y GitHub para construir una página web.

## Tecnologías

- **HTML, CSS y JavaScript:** para construir la página.
- **Git:** control de versiones, ramas y merges.
- **GitHub:** repositorio en línea y Pull Requests.
- **GitHub Pages:** para publicar la página.
- **Visual Studio Code:** editor de código y terminal.

## Estructura del proyecto

```
proyecto-acs/
├── index.html        → la página
├── README.md         → este archivo
├── css/styles.css    → estilos y modo oscuro
├── js/script.js      → diagrama, checklist y quiz
└── assets/images/    → imágenes
```

## Cómo trabajé con Git

Separé el trabajo en ramas para que el contenido y el diseño avanzaran por su lado y luego unirlos en `main`.

- `rama-contenido`: el texto del resumen, el quiz y las tablas.
- `rama-diseno`: los estilos, el diagrama y los arreglos.
- `rama-readme`: este README.

Al unir las ramas salieron 4 conflictos:

1. El encabezado y el menú de `index.html`, porque las dos ramas los cambiaron. Junté el diseño de una con el texto de la otra.
2. El pie de página de `index.html`. Dejé el estilo nuevo con el texto de contenido.
3. El final de `styles.css`, porque las dos ramas agregaron estilos ahí. Dejé los dos, pero al resolverlo se perdieron dos `}` y la página se veía mal; lo arreglé después de probarla.
4. El `README.md`, que las dos ramas habían editado.

Cuando agregué dos preguntas al quiz, el puntaje se quedó en "0 / 5" porque estaba escrito a mano. Lo corregí en `rama-diseno` para que cuente las preguntas solo, agregué un botón para reiniciar el quiz y lo integré con el **Pull Request #1**.

Las versiones estables están marcadas con tags: `v0.1`, `v1.0`, `v1.1` y `v1.2`.
