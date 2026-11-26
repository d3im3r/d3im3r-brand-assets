import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { BrandSignature } from "./brand-signature";
import {
  Cpu,
  Languages,
  CircleHelp,
  GitBranch,
  ArrowUpRight,
  LogOut,
  Layers3,
  ChevronRight,
} from "lucide-react";

interface AppHeaderProps {
  /** Nombre del proyecto/aplicación */
  appName?: string;
  /** Palabra o segmento a resaltar con el color de acento */
  accentWord?: string;
  /** Sufijo opcional (ej: 'Studio', 'App', 'Lab') */
  appSuffix?: string;
  /** Versión o badge de fase (ej: 'v1.0', 'BETA 0.1') */
  version?: string;
  /** Icono personalizado del producto (por defecto Cpu) */
  icon?: React.ReactNode;
  /** Enlace opcional al repositorio base / GitHub */
  baseProjectUrl?: string;
  /** Nombre o alias del usuario */
  userName?: string;
  /** Callback para cerrar sesión */
  onSignOut?: () => void;
  /** Callback para ayuda */
  onHelp?: () => void;
  /** Migas de pan opcionales para la sub-barra (ej: ['PROJECTS', 'EDITOR']) */
  breadcrumbs?: string[];
}

/**
 * Encabezado de Referencia del Ecosistema d3im3r.
 * Implementa el patrón visual unificado presente en microROS Studio, FlasherLab y d3im3r-class:
 * - Izquierda: Identidad única del producto + firma oficial "created by: d3im3r".
 * - Derecha: Navegación de sistema (idioma, selector de tema, ayuda, enlace base, perfil).
 * - Inferior (opcional): Barra de migas de pan con contexto de trabajo.
 */
export function AppHeader({
  appName = "myProject",
  accentWord = "Lab",
  appSuffix = "Studio",
  version = "v1.0",
  icon = <Cpu size={18} />,
  baseProjectUrl = "https://github.com/d3im3r",
  userName = "d3im3r",
  onSignOut,
  onHelp,
  breadcrumbs,
}: AppHeaderProps) {
  return (
    <div className="sticky top-0 z-50 border-b border-app-grid/60 bg-app-panel transition-colors duration-200">
      {/* =========================================================================
          Barra Principal
         ========================================================================= */}
      <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-2 sm:px-6">
        {/* --- Zona Izquierda: Marca del Producto + Firma d3im3r --- */}
        <div className="flex min-w-0 flex-wrap items-center gap-x-3 gap-y-2">
          {/* Caja con Icono Temático del Producto */}
          <div className="grid size-8 shrink-0 place-items-center rounded-lg border border-app-cyan/30 bg-app-cyan/10 text-app-cyan">
            {icon}
          </div>

          {/* Nombre y Wordmark del Proyecto */}
          <div className="whitespace-nowrap text-base font-semibold tracking-tight text-app-text">
            {appName}
            {accentWord && <span className="text-app-cyan">{accentWord}</span>}
            {appSuffix && (
              <span className="ml-1 font-normal text-app-muted">{appSuffix}</span>
            )}
          </div>

          {/* Badge de Versión / Fase */}
          {version && (
            <span className="hidden rounded border border-app-grid px-1.5 py-0.5 text-[9px] font-mono font-semibold uppercase tracking-wider text-app-muted md:inline">
              {version}
            </span>
          )}

          {/* Separador vertical y firma "created by: d3im3r" */}
          <div className="flex shrink-0 items-center gap-2 border-l border-app-grid/70 pl-3">
            <span className="hidden text-[10px] text-app-muted lg:inline">
              created by:
            </span>
            <BrandSignature className="h-7 w-20 object-contain" />
          </div>
        </div>

        {/* --- Zona Derecha: Preferencias, Idioma, Tema y Sesión --- */}
        <nav
          aria-label="Preferences and help"
          className="flex max-w-full flex-wrap items-center gap-1.5 sm:gap-2"
        >
          {/* Selector de Idioma */}
          <button
            type="button"
            className="flex h-8 items-center gap-1.5 rounded-lg border border-app-grid bg-app-panel px-2.5 font-mono text-xs text-app-text shadow-sm transition hover:bg-app-bg"
            title="Language"
          >
            <Languages className="size-3.5 text-app-muted" />
            <span>EN</span>
          </button>

          {/* Selector de Perfil / Workspace */}
          <select
            className="h-8 rounded-lg border border-app-grid bg-app-panel px-2.5 font-mono text-xs text-app-text focus:border-app-cyan focus:outline-none"
            defaultValue={userName}
          >
            <option value={userName}>{userName}</option>
          </select>

          {/* Conmutador de Tema (Luna / Sol con acento Cyan y Ámbar) */}
          <ThemeToggle />

          {/* Botón de Ayuda */}
          <button
            type="button"
            onClick={onHelp}
            className="flex size-8 items-center justify-center rounded-lg border border-app-grid bg-app-panel text-app-muted shadow-sm transition hover:bg-app-bg hover:text-app-text"
            title="Help"
            aria-label="Help"
          >
            <CircleHelp className="size-4" />
          </button>

          {/* Enlace al Proyecto Base / GitHub */}
          {baseProjectUrl && (
            <a
              href={baseProjectUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-8 items-center gap-1.5 rounded-lg border border-app-grid bg-app-panel px-3 text-xs font-medium text-app-text shadow-sm transition hover:bg-app-bg sm:flex"
              title="Base project repository"
            >
              <GitBranch className="size-3.5 text-app-cyan" />
              <span>Base project</span>
              <ArrowUpRight className="size-3 text-app-muted" />
            </a>
          )}

          {/* Usuario y Botón de Salir */}
          {userName && (
            <span className="hidden pl-1 text-xs font-medium text-app-muted xl:inline">
              {userName}
            </span>
          )}

          {onSignOut && (
            <button
              type="button"
              onClick={onSignOut}
              className="flex size-8 items-center justify-center rounded-lg border border-app-grid bg-app-panel text-app-muted shadow-sm transition hover:bg-app-bg hover:text-app-red"
              title="Sign out"
              aria-label="Sign out"
            >
              <LogOut className="size-3.5" />
            </button>
          )}
        </nav>
      </header>

      {/* =========================================================================
          Barra Opcional de Migas de Pan (Breadcrumbs)
         ========================================================================= */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="flex items-center gap-2 border-t border-app-grid/40 bg-app-panel/40 px-4 py-2 font-mono text-[10px] uppercase tracking-wider text-app-muted sm:px-6">
          <Layers3 size={12} className="text-app-muted" />
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={crumb}>
              {idx > 0 && <ChevronRight size={12} className="text-app-muted/60" />}
              <span
                className={
                  idx === breadcrumbs.length - 1
                    ? "font-semibold text-app-cyan"
                    : "text-app-muted"
                }
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
}
