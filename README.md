# Portfolio Cabin Crew · [NOMBRE COMPLETO]

Portfolio profesional multilingüe (español, inglés, francés y portugués) para un candidato que busca su primera oportunidad como Tripulante de Cabina de Pasajeros, Cabin Crew o Flight Attendant.

## Concepto creativo

La dirección visual se inspira en una tarjeta de embarque editorial: azul marino para transmitir confianza y rigor, azul cielo para aportar cercanía, amplios espacios en blanco y líneas de ruta muy sutiles. El diseño evita parecer una agencia de viajes y sitúa a la persona, el servicio y la seguridad en primer plano.

## Estrategia del portfolio

La web no intenta ocultar la falta de experiencia a bordo. Presenta la experiencia real en hostelería como una base profesional relevante para cabin crew: atención directa, comunicación, gestión de incidencias, coordinación de equipos, priorización y calma bajo presión. El proceso de selección de Lauda se explica con honestidad como una experiencia de iniciativa, aprendizaje y perseverancia.

## Mapa de secciones

1. Navegación y selector ES / EN / FR / PT.
2. Hero con propuesta profesional y fotografía pendiente.
3. Sobre mí.
4. Por qué cabin crew.
5. Experiencia profesional editable.
6. Competencias transferibles.
7. Primer contacto con el sector aeronáutico.
8. Idiomas.
9. Formación y preparación.
10. Valores profesionales.
11. Contacto y formulario Netlify Forms.
12. Página multilingüe de confirmación.

## Sistema visual

- Azul marino principal: `#0B2545`.
- Azul marino profundo: `#071A2F`.
- Azul cielo: `#67B8D4`.
- Azul cielo suave: `#E6F4F8`.
- Blanco: `#FFFFFF`.
- Gris de fondo: `#F7F9FB`.
- Acento dorado discreto: `#D3A44A`.
- Texto principal: `#142430`.

El proyecto utiliza una pila tipográfica local para no depender de fuentes externas: Georgia para los titulares editoriales e Inter/Segoe UI/Arial como tipografía funcional. En escritorio se emplean composiciones de dos columnas, una retícula amplia y una fotografía vertical destacada. En móvil, todo pasa a una columna, el menú se vuelve desplegable y los controles mantienen un tamaño táctil cómodo.

## Estructura de archivos

```text
.
├── index.html
├── success.html
├── css/
│   ├── styles.css
│   └── success.css
├── js/
│   ├── translations-fr.js
│   ├── translations-pt.js
│   └── script.js
├── assets/
│   ├── documents/
│   │   ├── cv-placeholder.html
│   │   └── README.md
│   ├── icons/
│   │   └── favicon-placeholder.svg
│   └── images/
│       └── README.md
├── netlify.toml
└── README.md
```

## Personalizar el contenido

1. Abre `js/script.js`.
2. Sustituye todos los valores de `candidateData` que aparecen entre corchetes.
3. Busca `[` en todo el proyecto para localizar el resto de marcadores pendientes.
4. Completa los dos bloques de experiencia solo con información real.
5. Confirma el estado del certificado TCP, el pasaporte, primeros auxilios, formación en seguridad, bases internacionales, disponibilidad horaria y entrevistas.
6. Revisa las traducciones en `script.js`, `translations-fr.js` y `translations-pt.js`.

Los datos importantes para SEO también aparecen directamente en `index.html`. Actualiza el título, la descripción, el JSON-LD, las etiquetas Open Graph y las Twitter Cards cuando completes el nombre y las URL definitivas.

## Añadir la fotografía

1. Prepara un retrato de pecho o cintura con fondo limpio, luz natural y ropa formal o smart casual.
2. No uses uniforme de una aerolínea, logotipos ni filtros intensos.
3. Optimiza la imagen como WebP o JPEG (máximo recomendado: 1200 px de ancho).
4. Guárdala como `assets/images/profile.jpg`.
5. Sustituye el bloque `.portrait-placeholder` de `index.html` por:

```html
<img
  src="assets/images/profile.jpg"
  alt="Retrato profesional de [NOMBRE COMPLETO], candidato a tripulante de cabina"
  width="960"
  height="1200"
>
```

La proporción recomendada es 4:5. Conserva el contenedor `.portrait-frame` para mantener el encuadre responsive.

## Añadir el CV

1. Guarda el CV definitivo como `assets/documents/cv.pdf`.
2. Cambia `candidateData.cvPath` en `js/script.js` a `assets/documents/cv.pdf`.
3. Comprueba los botones de descarga en español, inglés, francés y portugués.
4. Elimina `cv-placeholder.html` cuando ya no sea necesario.

## Añadir la imagen social

1. Crea una imagen de 1200 × 630 px con el nombre, el puesto objetivo y esta misma identidad visual.
2. Guárdala como `assets/images/og-image.png`.
3. Sustituye `[URL DE LA IMAGEN SOCIAL]` por su URL pública absoluta en las etiquetas Open Graph y Twitter de `index.html`.

## Ejecutar en local

No hay dependencias ni proceso de compilación. Puedes abrir `index.html` directamente en el navegador. Para reproducir mejor el comportamiento de un sitio publicado, usa cualquier servidor estático local, por ejemplo:

```bash
python -m http.server 8000
```

Después abre `http://localhost:8000`.

Comprueba:

- Cambio ES / EN / FR / PT sin recargar y persistencia tras actualizar.
- Navegación por anclas.
- Menú móvil con teclado y tecla Escape.
- Enlaces de correo, teléfono, LinkedIn y CV.
- Validación del formulario.
- Página `success.html`.

El envío real de Netlify Forms solo se procesa una vez desplegado en Netlify.

## Publicar en GitHub

```bash
git init -b master
git add .
git commit -m "feat: create multilingual cabin crew portfolio"
git remote add origin https://github.com/JoseAQuinto/PortfolioWeb-CabinCrew.git
git push -u origin master
```

## Desplegar en Netlify

### Opción A: conectar GitHub

1. En Netlify, selecciona **Add new site** y **Import an existing project**.
2. Conecta GitHub y elige `JoseAQuinto/PortfolioWeb-CabinCrew`.
3. No configures comando de compilación.
4. Usa `.` como directorio de publicación. `netlify.toml` ya incluye esta configuración.
5. Publica el sitio y abre la URL generada.

### Opción B: arrastrar la carpeta

1. Abre la sección de despliegues manuales de Netlify.
2. Arrastra la carpeta raíz completa del proyecto.
3. Espera a que el despliegue termine y abre la URL publicada.

## Comprobar Netlify Forms

1. Publica el sitio al menos una vez.
2. En el panel del sitio, abre **Forms** y verifica que aparece el formulario `contact`.
3. Envía un mensaje de prueba desde la web publicada.
4. Comprueba que el navegador llega a `success.html`.
5. Confirma que el envío aparece en el panel de Netlify.
6. Configura las notificaciones desde **Forms → Form notifications** si quieres recibir avisos por correo o mediante otra integración.

Netlify no envía avisos por correo automáticamente por el simple hecho de recibir formularios: las notificaciones deben configurarse desde el panel.

## Dominio y HTTPS

1. En Netlify, abre **Domain management**.
2. Añade el dominio personalizado y sigue las instrucciones DNS.
3. Verifica que el certificado TLS se ha emitido.
4. Activa la redirección a HTTPS si no aparece ya habilitada.
5. Sustituye `[URL FINAL DEL PORTFOLIO]` en `index.html` por la URL canónica definitiva.

## Marcadores pendientes

- `[NOMBRE COMPLETO]` y `[NOMBRE]`.
- `[CIUDAD, PAÍS]`.
- `[TELÉFONO]` y `[EMAIL]`.
- `[ENLACE DE LINKEDIN]` / `[URL DE LINKEDIN]`.
- `[URL FINAL DEL PORTFOLIO]`.
- `[URL DE LA IMAGEN SOCIAL]`.
- Restaurantes, ciudades, puestos y fechas reales.
- Responsabilidades reales, progresión y ejemplos de problemas resueltos.
- Formación académica.
- Estado real del certificado TCP.
- Primeros auxilios y formación en seguridad.
- Pasaporte vigente.
- Disponibilidad para bases internacionales.
- Disponibilidad horaria y para entrevistas.
- Fotografía profesional, CV definitivo, favicon definitivo e imagen social.

## Adaptar el portfolio a una aerolínea

- Lee la oferta y prioriza en el texto las competencias que la aerolínea menciona de forma explícita.
- Mantén siempre los hechos originales: adapta el énfasis, no inventes experiencia.
- Para una aerolínea internacional, comparte por defecto la versión inglesa y destaca el nivel B2 con una redacción que puedas defender en entrevista.
- Para aerolíneas orientadas al servicio, da mayor visibilidad a la experiencia con clientes y a la gestión de incidencias.
- Para procesos muy centrados en procedimientos, destaca responsabilidad, aprendizaje, higiene, seguridad y el trabajo coordinado.
- No copies la paleta, el logotipo o el uniforme de una aerolínea. Conserva una identidad profesional propia.

## Accesibilidad y rendimiento

El sitio incluye HTML semántico, enlace de salto, focos visibles, menú accesible, mensajes de error asociados, soporte para `prefers-reduced-motion` y controles táctiles amplios. No carga librerías, frameworks ni fuentes remotas. Optimiza la fotografía y la imagen social antes de publicarlas para conservar una carga rápida.
