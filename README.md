# Proyecto ACS: El proceso de Administración de la Configuración del Software

Página web interactiva que resume la sección 22.3, *El proceso ACS*, del libro *Ingeniería del Software:
un enfoque práctico* de Roger S. Pressman. El repositorio se construyó aplicando el mismo proceso que
explica: identificación, control de versión, control de cambio, auditoría y reporte.

🔗 **Página publicada:** https://USUARIO.github.io/proyecto-acs/

## Integrantes

- John Cedano

> Actividad realizada de forma individual con autorización del profesor. Para demostrar el trabajo
> colaborativo se usaron dos ramas paralelas (`rama-contenido` y `rama-diseno`) y se resolvieron
> conflictos de integración reales.

## Descripción del proyecto

La página explica los cuatro objetivos del proceso ACS y sus cinco tareas (identificación, control de
versión, control de cambio, auditoría de la configuración y reporte de estado). Incluye un diagrama
interactivo de capas, una tabla que relaciona cada tarea con Git, una checklist de auditoría y un quiz
de repaso.

## Objetivo de la actividad

Analizar y sintetizar la sección 22.3 de Pressman y demostrar en la práctica el control de versiones y el
trabajo con ramas en Git y GitHub.

## Tecnologías utilizadas

- HTML5, CSS3 (variables, grid, flexbox, modo oscuro) y JavaScript sin librerías.
- Git y GitHub para el control de versiones.
- GitHub Pages para publicar la página.

## Estructura del proyecto

```
proyecto-acs/
├── index.html            # Página principal con el resumen
├── README.md             # Este archivo
├── css/
│   └── styles.css        # Estilos, modo oscuro y diseño responsive
├── js/
│   └── script.js         # Tema, barra de progreso, diagrama, checklist y quiz
└── assets/
    └── images/
        └── capas-acs.svg # Diagrama de capas del proceso ACS
```

## Flujo de trabajo y control de versiones

```
main ──●── v0.1 ─────────────●── v1.0 ──────────●── v1.1 ───────●── v1.2
        \                   / \                / \             /          ├─ rama-contenido ─●   ├─ (quiz) ──────●   ├─ (README) ─●   │
         └─ rama-diseno ────────●  └─ (checklist) ──●  └─ (menú) ───●
```

Cada parte del trabajo se hizo en su propia rama y se integró a `main` con `git merge --no-ff`, de modo
que el historial muestra claramente el trabajo en paralelo. Las versiones estables se marcaron con tags
(`v0.1`, `v1.0`, `v1.1`, `v1.2`), que funcionan como **líneas de referencia**.

Para ver el historial completo:

```bash
git log --oneline --graph --all
```

### Conflictos resueltos (reporte de estado)

| # | Archivo | Causa | Resolución |
|---|---------|-------|------------|
| 1 | `index.html` | Ambas ramas modificaron el encabezado, el menú y el contenido de `<main>`. | Se conservó el diseño `.hero` y el menú fijo de *rama-diseno* con el título y los enlaces de *rama-contenido*; el diagrama se insertó después de "Objetivos". |
| 1 | `README.md` | Ambas ramas escribieron su participación en la misma línea. | Se conservaron las dos descripciones. |
| 2 | `index.html` | Ambas ramas cambiaron el pie de página. | Se unió la clase `.pie` y el enlace "Volver arriba" con el texto descriptivo. |
| 3 | `css/styles.css` | Ambas ramas agregaron reglas al final del archivo. | Se conservaron ambos bloques. En la auditoría posterior se detectaron dos llaves `}` perdidas y se corrigieron. |
| 4 | `README.md` | *rama-diseno* agregó "Tecnologías" donde *rama-contenido* reescribió el README. | Se mantuvo el README completo y se ubicó "Tecnologías" antes de "Estructura". |

### Relación con el proceso ACS

| Tarea ACS | Aplicación en este repositorio |
|-----------|--------------------------------|
| Identificación | Cada archivo es un ICS con nombre y ubicación fija. |
| Control de versión | Commits descriptivos y tags de versión. |
| Control de cambio | Ramas para cada cambio e integración mediante merge. |
| Auditoría | Revisión del diff y prueba de la página antes de cada merge. |
| Reporte de estado | `git log`, mensajes de merge y esta tabla de conflictos. |

## Participación

- **rama-contenido:** redacción del resumen (introducción, objetivos, las cinco tareas ACS, ejemplos,
  conclusión y referencia), quiz de repaso y README.
- **rama-diseno:** diseño visual (paleta, encabezado, menú fijo, modo oscuro), diagrama interactivo de
  capas, checklist de auditoría, lógica del quiz y ajustes responsive.

## Cómo ver el proyecto

- **En línea:** abrir el enlace de GitHub Pages indicado arriba.
- **En local:** clonar el repositorio y abrir `index.html` en el navegador:

```bash
git clone https://github.com/USUARIO/proyecto-acs.git
cd proyecto-acs
start index.html
```

## Referencia

Pressman, R. S. (2010). *Ingeniería del software: un enfoque práctico* (7.ª ed.). McGraw-Hill.
Capítulo 22, sección 22.3.
