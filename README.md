# Qwik App ⚡️

- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik Github](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)
- [Mitosis](https://github.com/BuilderIO/mitosis)
- [Builder.io](https://www.builder.io/)

---

## Estructura del proyecto

Dentro de su proyecto, verá los siguientes directorios y archivos:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Proporciona el enrutamiento basado en directorios, que puede incluir una jerarquía de `layout.tsx` archivos de diseño, y `index.tsx` archivos como la página. Además, `index.ts` los archivos son endpoints. Por favor vea el [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) para más información.

- `src/components`: Directorio recomendado para componentes.

- `public`:Cualquier recurso estático, como imágenes, se puede colocar en el directorio público. Por favor vea el [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) para más información.

## Agregar integraciones

Utilizar el `npm run qwik add` comando para agregar otras integraciones.Algunos ejemplos de integraciones incluyen  Cloudflare, Netlify or Vercel server, y el generador de sitios estáticos (SSG).

```
npm run qwik add
```

## Desarrollo

Usos del modo de desarrollo [Vite's development server](https://vitejs.dev/). Para Qwik durante el desarrollo, `dev` el comando también se renderizará en el lado del servidor (SSR) la salida. Los módulos de desarrollo del lado del cliente cargados por el navegador.

```
npm run dev
```

> Note: durante el modo de desarrollo, Vite solicitará muchos archivos JS, lo que no representa una compilación de producción de Qwik.

## Avance

El comando de vista previa creará una compilación de producción de los módulos del cliente, una compilación de producción de `src/entry.preview.tsx`, y creara un servidor local. El servidor de vista previa es solo por conveniencia para obtener una vista previa local de una compilación de producción, pero no debe usarse como servidor de producción..

```
npm run preview
```

## Producción

La compilación de producción debe generar los módulos de cliente y servidor ejecutando los comandos de compilación de cliente y servidor. Además, el comando de compilación usará Typescript para ejecutar una verificación de tipo en la fuente.

```
npm run build
```
