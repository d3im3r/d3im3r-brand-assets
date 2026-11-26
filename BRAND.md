# Brand usage guidelines & design system

**Name:** d3im3r  
**Symbol:** Owl-chip  
**Signature concept:** `{o⌄o}` (U+2304)  
**Primary Brand Colors:** `#00503D` (Pine green) & `#0B1518` (Obsidian slate)

---

## Preferred visual treatments

- **Light surfaces:** `assets/svg/*-light.svg`
- **Dark surfaces:** `assets/svg/*-dark.svg`
- **Small UI / Avatars:** `assets/svg/icon-*.svg` or `assets/favicon/favicon.svg`
- **Full identity / Headers:** `assets/svg/horizontal-*.svg` or `assets/svg/vertical-*.svg`

For a consistent appearance, we recommend keeping the original proportions, color relationships, and visual features. These recommendations are optional. The supplied SVGs are a vectorization of approved raster artwork; minor edge differences may exist.

---

## 🎨 Paleta oficial de colores d3im3r (Dual Design System)

El ecosistema d3im3r implementa un sistema de diseño dual (Oscuro por defecto y Claro) tokenizado para CSS nativo, Tailwind CSS (v3 y v4) y librerías basadas en componentes (Shadcn UI, Radix).

### 🌙 Modo Oscuro (Dark Mode - Default)

| Elemento | Color HEX | Token Semántico | Token Framework | Rol / Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `#0B1727` | `--app-bg` | `--background` | Fondo principal de la aplicación |
| **Panel** | `#101E30` | `--app-panel` | `--card`, `--popover`, `--input` | Paneles laterales, tarjetas y nodos |
| **Grid** | `#35516B` | `--app-grid` | `--border` | Bordes, guías y rejilla del canvas |
| **Text / White** | `#FFFFFF` | `--app-text` | `--foreground` | Texto principal |
| **Muted** | `#A5B4C7` | `--app-muted` | `--muted-foreground` | Texto secundario y etiquetas auxiliares |
| **Green** | `#4ADE80` | `--app-green` | `--secondary`, `--diagram-output-accent` | Estado activo y nodos de salida / subscribers |
| **Cyan** | `#22D3EE` | `--app-cyan` | `--primary`, `--ring` | Acento principal, handles de conexión y focus |
| **Orange** | `#FFAD35` | `--app-orange` | `--chart-3` | Advertencias |
| **Red** | `#FB7185` | `--app-red` | `--destructive` | Conflictos de pines, errores o alarmas |

### ☀️ Modo Claro (Light Mode)

| Elemento | Color HEX | Token Semántico | Token Framework | Rol / Aplicación |
| :--- | :--- | :--- | :--- | :--- |
| **Background** | `#F4F7FB` | `--app-bg` | `--background` | Fondo general claro |
| **Panel** | `#FFFFFF` | `--app-panel` | `--card`, `--popover`, `--input` | Tarjetas y paneles en blanco limpio |
| **Grid** | `#CBD5E1` | `--app-grid` | `--border` | Bordes y separadores |
| **Text** | `#172B45` | `--app-text` | `--foreground` | Texto principal de alto contraste |
| **Muted** | `#64748B` | `--app-muted` | `--muted-foreground` | Texto secundario |
| **Green** | `#16A34A` | `--app-green` | `--secondary`, `--diagram-output-accent` | Estado activo y actuadores |
| **Cyan** | `#0891B2` | `--app-cyan` | `--primary`, `--ring` | Acento principal y foco |
| **Orange** | `#D97706` | `--app-orange` | `--chart-3` | Advertencias |
| **Red** | `#DC4660` | `--app-red` | `--destructive` | Errores |

---

## 🛠️ Filosofía de diseño: Cimientos comunes e identidad propia

Este repositorio sirve como **base y punto de partida**, no como una librería compartida en tiempo de ejecución. Cada proyecto nuevo que se desarrolle en el ecosistema d3im3r debe:

1. **Copiar y adaptar (Scaffold / Starter Kit):** Incorporar los archivos base (`styles/theme.css`, `snippets/`, favicons) directamente en el árbol de código del nuevo proyecto.
2. **Desarrollar una identidad propia:** Utilizar la arquitectura de tokens (`--app-bg`, `--app-panel`, `--app-cyan`, etc.) para mantener coherencia visual y usabilidad, pero sintiéndose libre de introducir colores de acento particulares, estados especializados (sensores, actuadores, gráficos) o imaginería adaptada a la función de la herramienta.
3. **Autonomía total:** Al no depender de imports remotos ni CDNs externos, ningún proyecto se verá afectado por evoluciones futuras en otros productos.
4. **Tooling y diseño:** Se proporciona [`tokens/colors.json`](tokens/colors.json) para sincronizar con Figma o herramientas de diseño, y [`tokens/tailwind.preset.js`](tokens/tailwind.preset.js) para compatibilidad con Tailwind v3.

---

## 🏛️ Anatomía del Header del Ecosistema d3im3r

Los proyectos insignia del ecosistema (**microROS Studio**, **flasherLab** y **d3im3r-class**) implementan una estructura de encabezado común (`AppHeader`) que equilibra la **identidad individual del producto** con el **sello de autoría d3im3r**:

```
+---------------------------------------------------------------------------------------------------------+
| [Icon] Proyecto[Acento] Studio [v1.0] | created by: [d3im3r]      [EN] [Profile] [Theme] [Help] [Repo] [User] |
+---------------------------------------------------------------------------------------------------------+
| [Layers] PROJECTS > SECCIÓN ACTIVA (Breadcrumbs opcional)                                               |
+---------------------------------------------------------------------------------------------------------+
```

### 1. Zona Izquierda: Identidad Propia + Co-Branding
* **Icon Box Temático:** Contenedor de 32×32 (`size-8 rounded-lg`) con fondo semitransparente (`bg-accent/10`), borde tenue (`border-accent/30`) e icono alusivo al dominio de la app:
  * `microROS Studio`: Icono `Cpu` con acento Cyan/Verde.
  * `flasherLab Studio`: Icono `Cpu` con acento Cyan (`bg-app-cyan/10 border-app-cyan/30 text-app-cyan`).
  * `d3im3r-class (Aula)`: Icono `BookOpen` / `topbar-badge` para el entorno de aprendizaje.
* **Wordmark del Proyecto:** Tipografía semibold con la palabra clave o acrónimo destacado en el color de acento de la app (ej: `micro`**`ROS`** `Studio`, `flasher`**`Lab`** `Studio`, **`aula`**`.`).
* **Badge de Versión / Fase:** Indicador monospaciado sutil (`text-[9px] border border-app-grid`), ej. `v1.0`, `BETA 0.1`, `v1.2`.
* **Separador de Autoría:** Línea vertical discreta (`border-l border-app-grid/70 pl-3`).
* **Firma d3im3r Co-Branded:** Etiqueta en miniatura `created by:` (`text-[10px] text-app-muted`) seguida del logotipo horizontal reactivo (`horizontal-light.svg` / `horizontal-dark.svg` vía [`snippets/brand-signature.tsx`](snippets/brand-signature.tsx)).

### 2. Zona Derecha: Controles de Sistema y Preferencias
* **Selector de Idioma:** Botón compacto con icono `Languages` y código de idioma monospaciado (`EN`, `ES`).
* **Selector de Workspace / Perfil:** Desplegable estilizado con el alias del usuario o entorno activo.
* **Conmutador de Tema (`ThemeToggle`):** Botón con iconos interactivos de **Luna en Cyan** (modo oscuro) y **Sol en Ámbar** (modo claro).
* **Botón de Ayuda:** Icono `CircleHelp` para documentación o modales de atajos.
* **Enlace al Proyecto Base (`Base project`):** Botón estilizado con `GitBranch` y `ArrowUpRight` enlazando al repositorio correspondiente.
* **Control de Sesión:** Nombre de usuario y botón de salida con hover de alerta (`hover:text-app-red`).

### 3. Sub-Barra de Migas de Pan (Breadcrumb Strip)
En herramientas de desarrollo y paneles interactivos (como *microROS Studio* o *flasherLab*), se añade una sub-barra inferior con `border-t border-app-grid/40 bg-app-panel/40`:
* Icono `Layers3`.
* Ruta jerárquica con separadores `ChevronRight` (ej: `PROJECTS > FLASHERLAB STUDIO` con el último término resaltado en `text-app-cyan`).

> Puedes copiar la implementación lista para producción de este encabezado desde [`snippets/app-header.tsx`](snippets/app-header.tsx) y [`snippets/brand-signature.tsx`](snippets/brand-signature.tsx).

---

## Free usage

The repository and all its contents, including the brand name and emblem, may be used, modified, and redistributed freely for personal or commercial purposes. No authorization issue, prior written approval, attribution, or payment is required. The preferred treatments above are recommendations, not conditions of use. See [LICENSE](LICENSE) for the full permission grant.
