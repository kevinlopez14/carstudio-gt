# CarStudioGT

**Plataforma de tiendas online para vendedores de vehículos**

CarStudioGT es una aplicación web moderna que permite a vendedores de vehículos crear y gestionar su propia tienda online personalizada. Con un enfoque en la simplicidad y profesionalismo, los vendedores pueden mostrar su inventario, gestionar leads y cerrar más ventas.

## 🚀 Características Principales

- **Tienda Online Personalizada**: Subdominio propio para construir tu marca profesional
- **Gestión de Inventario**: Control completo de tu catálogo de vehículos
- **Galerías Profesionales**: Múltiples fotos por vehículo para mostrar cada detalle
- **Fichas Detalladas**: Información completa de especificaciones técnicas
- **Dashboard Intuitivo**: Panel de control fácil de usar
- **Gestión de Leads**: Captura y administra clientes potenciales
- **Notificaciones en Tiempo Real**: Alertas instantáneas de nuevos interesados
- **SEO Optimizado**: Posicionamiento automático para atraer más clientes

## 🎯 Propósito del Proyecto

Esta landing page está diseñada para presentar la plataforma CarStudioGT a vendedores de vehículos, destacando los beneficios de digitalizar su negocio y facilitar el proceso de venta online.

## 💻 Cómo Ejecutar el Proyecto

### Prerrequisitos

- Node.js (versión 16 o superior) - [Instalar con nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm o bun como gestor de paquetes

### Instalación y Ejecución

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>

# 2. Navegar al directorio del proyecto
cd drive-sales-hub-main

# 3. Instalar dependencias
npm install
# o si usas bun:
bun install

# 4. Iniciar el servidor de desarrollo
npm run dev
# o con bun:
bun run dev
```

El proyecto estará disponible en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye el proyecto para producción
- `npm run preview` - Previsualiza la build de producción
- `npm run lint` - Ejecuta el linter ESLint
- `npm test` - Ejecuta las pruebas
- `npm run test:watch` - Ejecuta las pruebas en modo watch

## ✏️ Cómo Editar el Código

Hay varias formas de editar la aplicación:

**Opción 1: Usar Lovable**

Visita el [Proyecto en Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) y comienza a hacer prompts. Los cambios hechos vía Lovable se confirmarán automáticamente en este repositorio.

**Opción 2: IDE Local**

Trabaja localmente con tu IDE preferido. Clona el repo y haz push de los cambios. Los cambios también se reflejarán en Lovable.

**Opción 3: Editar directamente en GitHub**

- Navega al archivo deseado
- Haz clic en el botón "Edit" (ícono de lápiz)
- Realiza tus cambios y confírmalos

**Opción 4: GitHub Codespaces**

- Navega a la página principal del repositorio
- Haz clic en el botón "Code"
- Selecciona la pestaña "Codespaces"
- Haz clic en "New codespace"
- Edita archivos y confirma tus cambios


## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con tecnologías modernas de desarrollo web:

- **[Vite](https://vitejs.dev/)** - Build tool ultrarrápido
- **[React 18](https://react.dev/)** - Biblioteca de UI
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos estáticos
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[shadcn/ui](https://ui.shadcn.com/)** - Componentes UI reutilizables y accesibles
- **[React Router](https://reactrouter.com/)** - Navegación del lado del cliente
- **[TanStack Query](https://tanstack.com/query/latest)** - Gestión de estado asíncrono
- **[Lucide React](https://lucide.dev/)** - Iconos modernos
- **[React Hook Form](https://react-hook-form.com/)** - Gestión de formularios
- **[Vitest](https://vitest.dev/)** - Framework de testing

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes de React
│   ├── ui/             # Componentes UI de shadcn
│   ├── Header.tsx      # Navegación principal
│   ├── HeroSection.tsx # Sección hero
│   ├── Features.tsx    # Características principales
│   ├── Pricing.tsx     # Planes de precios
│   ├── Testimonials.tsx # Testimonios de clientes
│   └── ...
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Página principal (landing)
│   └── NotFound.tsx    # Página 404
├── hooks/              # Custom React hooks
├── lib/                # Utilidades y helpers
└── test/               # Archivos de prueba
```


## 🚀 Despliegue

### Opción 1: Lovable (Recomendado)
1. Visita el [Proyecto en Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID)
2. Haz clic en Share → Publish
3. Tu sitio estará online en minutos

### Opción 2: Otros Servicios
El proyecto puede desplegarse en cualquier plataforma que soporte aplicaciones Vite/React:
- **Vercel**: `vercel --prod`
- **Netlify**: Conecta tu repositorio
- **GitHub Pages**: Configura GitHub Actions
- **Railway, Render, etc.**

## 🌐 Dominio Personalizado

Para conectar un dominio personalizado:
1. Navega a Project > Settings > Domains en Lovable
2. Haz clic en "Connect Domain"
3. Sigue las instrucciones de configuración DNS

Más información: [Configurar dominio personalizado](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📝 Componentes Principales

- **Header**: Navegación principal con logo y menú
- **HeroSection**: Sección principal con CTA y propuesta de valor
- **BenefitsBar**: Barra de beneficios clave
- **HowItWorks**: Explicación del proceso paso a paso
- **Features**: Características principales de la plataforma
- **Pricing**: Planes de precios y comparación
- **WhyChooseUs**: Razones para elegir la plataforma
- **Testimonials**: Testimonios de clientes satisfechos
- **FAQ**: Preguntas frecuentes
- **FinalCTA**: Llamado a la acción final
- **Footer**: Pie de página con enlaces y redes sociales

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir:

1. Haz fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es privado y está protegido por derechos de autor.

---

Desarrollado con ❤️ para vendedores de vehículos que quieren crecer en el mundo digital

