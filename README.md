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
