import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTramLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsNTBIMTM0VjIyaDM0YTYsNiwwLDAsMCwwLTEySDg4YTYsNiwwLDAsMCwwLDEyaDM0VjUwSDcyQTMwLDMwLDAsMCwwLDQyLDgwVjE4NGEzMCwzMCwwLDAsMCwzMCwzMEg4NEw2Ny4yLDIzNi40YTYsNiwwLDEsMCw5LjYsNy4yTDk5LDIxNGg1OGwyMi4yLDI5LjZhNiw2LDAsMCwwLDkuNi03LjJMMTcyLDIxNGgxMmEzMCwzMCwwLDAsMCwzMC0zMFY4MEEzMCwzMCwwLDAsMCwxODQsNTBaTTcyLDYySDE4NGExOCwxOCwwLDAsMSwxOCwxOHY0Mkg1NFY4MEExOCwxOCwwLDAsMSw3Miw2MlpNMTg0LDIwMkg3MmExOCwxOCwwLDAsMS0xOC0xOFYxMzRIMjAydjUwQTE4LDE4LDAsMCwxLDE4NCwyMDJaTTk0LDE3MmExMCwxMCwwLDEsMS0xMC0xMEExMCwxMCwwLDAsMSw5NCwxNzJabTg4LDBhMTAsMTAsMCwxLDEtMTAtMTBBMTAsMTAsMCwwLDEsMTgyLDE3MloiLz48L3N2Zz4=)
 */
export function PhTramLightIcon(props: PhTramLightIconProps) {
  const merged = mergeProps({ size: "1em", color: "currentColor" }, props);
  const [local, svgProps] = splitProps(merged, ["size", "color"]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      fill={local.color}
      width={local.size}
      height={local.size}
      {...svgProps}
    >
      <path d="M184,50H134V22h34a6,6,0,0,0,0-12H88a6,6,0,0,0,0,12h34V50H72A30,30,0,0,0,42,80V184a30,30,0,0,0,30,30H84L67.2,236.4a6,6,0,1,0,9.6,7.2L99,214h58l22.2,29.6a6,6,0,0,0,9.6-7.2L172,214h12a30,30,0,0,0,30-30V80A30,30,0,0,0,184,50ZM72,62H184a18,18,0,0,1,18,18v42H54V80A18,18,0,0,1,72,62ZM184,202H72a18,18,0,0,1-18-18V134H202v50A18,18,0,0,1,184,202ZM94,172a10,10,0,1,1-10-10A10,10,0,0,1,94,172Zm88,0a10,10,0,1,1-10-10A10,10,0,0,1,182,172Z"/>
    </svg>
  );
}
