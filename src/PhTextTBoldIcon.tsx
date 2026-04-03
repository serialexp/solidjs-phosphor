import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNTZWODhhMTIsMTIsMCwwLDEtMjQsMFY2OEgxNDBWMTg4aDIwYTEyLDEyLDAsMCwxLDAsMjRIOTZhMTIsMTIsMCwwLDEsMC0yNGgyMFY2OEg2OFY4OGExMiwxMiwwLDAsMS0yNCwwVjU2QTEyLDEyLDAsMCwxLDU2LDQ0SDIwMEExMiwxMiwwLDAsMSwyMTIsNTZaIi8+PC9zdmc+)
 */
export function PhTextTBoldIcon(props: PhTextTBoldIconProps) {
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
      <path d="M212,56V88a12,12,0,0,1-24,0V68H140V188h20a12,12,0,0,1,0,24H96a12,12,0,0,1,0-24h20V68H68V88a12,12,0,0,1-24,0V56A12,12,0,0,1,56,44H200A12,12,0,0,1,212,56Z"/>
    </svg>
  );
}
