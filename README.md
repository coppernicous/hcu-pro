# Campus PRO

Aquí se alojan todas las funcionalides y versiones de Campus PRO


## Estructura del repositorio
El repositorio se organiza de la siguiente manera:

- `site`: redirección al sitio web de presentación
- `core`: archivos principales
    - `bk.txt`: Uso como bookmarlet
    - `cup-init.js`: Script que valida que se utlice la última versión
    - `cup-main.js`: Script principal, compatible como userscript y que requiere actualización manual
    - `cup-run.js`: Inicializa `init.js`, garantizando ser un userscript que no requiere actualización
- `chrome-extension-mv2`: Extensión que emplea el manifiesto V2 compatible con todos los navegadores basados en Chromium