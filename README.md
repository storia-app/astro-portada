# Astro · Portada

Portada con tus últimos artículos, tags y modo oscuro.

Plantilla de blog de [Storia](https://github.com/storia-app). Demo: https://storia-templates.github.io/astro-portada/

- Modo oscuro
- Tags
- Imagen de portada
- Resaltado de código

## Cómo funciona

1. Storia crea este repositorio en tu cuenta de GitHub a partir de la plantilla.
2. Lo publica gratis con **GitHub Pages** (workflow `.github/workflows/pages.yml`).
3. Cada artículo que publicas desde Storia llega como un **Pull Request** que agrega
   un archivo en `src/content/blog/`. Cuando lo apruebas, el sitio se vuelve a publicar solo.

El blog es tuyo: puedes cambiar el diseño, agregar páginas o dejar de usar Storia
cuando quieras.

## Personalizar

- Nombre, descripción y autor: `src/site.config.ts`.
- Colores y tipografía: `src/styles/global.css` (variables al inicio del archivo).
- Borra los artículos de ejemplo cuando publiques el primero tuyo.

## Formato de los artículos

Cada artículo es un archivo Markdown en `src/content/blog/` con este frontmatter:

```yaml
title: "{{ title }}"
description: "{{ excerpt }}"
pubDate: "{{ published_at_iso }}"
tags: [{{ tags_yaml_array }}]
heroImage: "{{ seo_image }}"
draft: false
```

Si cambias estos campos, actualiza también `storia.json` para que Storia escriba
lo mismo.

## Probar en tu computador

```bash
npm install
npm run dev
```

Y abre http://localhost:4321.

## Dominio propio

En GitHub, ve a **Settings → Pages → Custom domain** y sigue los pasos. No hace
falta cambiar nada en el código.

## Notas

- La primera ejecución del workflow, la que corre al crear el repositorio, puede
  fallar porque GitHub Pages todavía no estaba activo. Storia lanza otra
  publicación apenas lo activa.
- `storia.json` le dice a Storia dónde va cada artículo y qué frontmatter usa.
