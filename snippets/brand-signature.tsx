import React from "react";

interface BrandSignatureProps {
  className?: string;
  width?: number;
  height?: number;
}

/**
 * Firma oficial d3im3r responsive.
 * Muestra automáticamente la variante oscura o clara según el tema (Tailwind dark: o CSS).
 */
export function BrandSignature({
  className = "h-7 w-20 object-contain",
  width = 80,
  height = 28,
}: BrandSignatureProps) {
  return (
    <div
      aria-label="d3im3r signature"
      className="inline-flex items-center shrink-0"
    >
      {/* Modo claro */}
      <img
        src="/brand/d3im3r/horizontal-light.svg"
        alt="d3im3r"
        width={width}
        height={height}
        className={`${className} dark:hidden`}
      />
      {/* Modo oscuro */}
      <img
        src="/brand/d3im3r/horizontal-dark.svg"
        alt="d3im3r"
        width={width}
        height={height}
        className={`hidden ${className} dark:block`}
      />
    </div>
  );
}
