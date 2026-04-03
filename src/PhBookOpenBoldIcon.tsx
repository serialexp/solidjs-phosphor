import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookOpenBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNDRIMTYwYTQzLjg2LDQzLjg2LDAsMCwwLTMyLDEzLjg1QTQzLjg2LDQzLjg2LDAsMCwwLDk2LDQ0SDI0QTEyLDEyLDAsMCwwLDEyLDU2VjIwMGExMiwxMiwwLDAsMCwxMiwxMkg5NmEyMCwyMCwwLDAsMSwyMCwyMCwxMiwxMiwwLDAsMCwyNCwwLDIwLDIwLDAsMCwxLDIwLTIwaDcyYTEyLDEyLDAsMCwwLDEyLTEyVjU2QTEyLDEyLDAsMCwwLDIzMiw0NFpNOTYsMTg4SDM2VjY4SDk2YTIwLDIwLDAsMCwxLDIwLDIwVjE5Mi44MUE0My43OSw0My43OSwwLDAsMCw5NiwxODhabTEyNCwwSDE2MGE0My43MSw0My43MSwwLDAsMC0yMCw0LjgzVjg4YTIwLDIwLDAsMCwxLDIwLTIwaDYwWiIvPjwvc3ZnPg==)
 */
export function PhBookOpenBoldIcon(props: PhBookOpenBoldIconProps) {
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
      <path d="M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z"/>
    </svg>
  );
}
