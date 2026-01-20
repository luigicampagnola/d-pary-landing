# D'Pary Landing Page

Landing page moderna para D'Pary, desarrollada con Next.js 15, TypeScript y Tailwind CSS.

## Tecnologías

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Animaciones
- **next-themes** - Dark Mode

## Características

- Diseño responsive y moderno
- Dark Mode con toggle
- Animaciones fluidas con Framer Motion
- SEO optimizado con metadata completa
- Open Graph tags configurados
- Accesibilidad (a11y)
- Performance optimizada

## Estructura del Proyecto

```
d-pary-landing/
├── public/                    # Assets estáticos
│   ├── favicon.ico
│   └── manifest.json
├── src/
│   ├── app/
│   │   ├── globals.css       # Estilos globales y paleta D'Pary
│   │   ├── layout.tsx        # Layout principal con metadata
│   │   └── page.tsx          # Página principal
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx    # Navegación con mobile menu
│       │   └── Footer.tsx    # Footer con links y social
│       ├── sections/
│       │   ├── Hero.tsx      # Sección hero con mockup
│       │   ├── Features.tsx  # Grid de características
│       │   ├── Benefits.tsx  # Beneficios con estadísticas
│       │   ├── Testimonials.tsx
│       │   └── CTA.tsx       # Call to action final
│       ├── ui/
│       │   ├── Button.tsx    # Botón reutilizable
│       │   └── ThemeToggle.tsx
│       └── Providers.tsx     # Theme provider
├── package.json
└── tsconfig.json
```

## Paleta de Colores D'Pary 2025

### Colores Primarios - Navy & Gold

| Color | Hex | Uso |
|-------|-----|-----|
| Navy Primary | `#00008B` | Color principal, botones |
| Midnight Navy | `#0A1628` | Fondos dark mode |
| Rich Gold | `#D4AF37` | Acentos premium |
| Champagne Gold | `#F7E7CE` | Fondos claros |

### Colores Secundarios

| Color | Hex | Uso |
|-------|-----|-----|
| Mint Green | `#4ECDC4` | Estados positivos |
| Hot Pink | `#FF1493` | Destacados |
| Electric Violet | `#8B5CF6` | Gradientes |

### Neutros

| Color | Hex | Uso |
|-------|-----|-----|
| Neutral Gray | `#6B7280` | Texto secundario |
| Silver Mist | `#C0C0C0` | Texto en dark mode |
| Soft Charcoal | `#2D2D3A` | Fondos oscuros |

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/d-pary-landing.git
cd d-pary-landing

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build de producción
npm run start    # Iniciar servidor de producción
npm run lint     # Ejecutar ESLint
```

## Deploy en Vercel

1. Push al repositorio en GitHub
2. Conectar repositorio en [Vercel](https://vercel.com)
3. Deploy automático en cada push a `main`

### Variables de Entorno

No se requieren variables de entorno para el funcionamiento básico.

## Secciones de la Landing

1. **Header** - Navegación sticky con logo, links y dark mode toggle
2. **Hero** - Título impactante, descripción y mockup de la app
3. **Características** - Grid con 6 features principales
4. **Beneficios** - Por qué elegir D'Pary con estadísticas
5. **Testimonios** - Carrusel de testimonios de usuarios
6. **CTA** - Call to action con botones de descarga
7. **Footer** - Links, redes sociales y badges de stores

## Principios de Diseño

1. **Minimalismo elegante** - Menos bordes, más espacio en blanco
2. **Sombras suaves** - Elevación sutil en cards
3. **Sin dividers** - Separación por espaciado
4. **Cards redondeadas** - Border radius de 16px
5. **Animaciones sutiles** - Transiciones de 300ms

## Personalización

### Modificar Colores

Editar las variables CSS en `src/app/globals.css`:

```css
:root {
  --navy-primary: #00008B;
  --rich-gold: #D4AF37;
  /* ... más colores */
}
```

### Agregar Secciones

1. Crear componente en `src/components/sections/`
2. Importar en `src/app/page.tsx`
3. Agregar link en Header si es necesario

## Licencia

MIT © Yuti Labs

---

**D'Pary** - La mejor app para descubrir eventos y vida nocturna
