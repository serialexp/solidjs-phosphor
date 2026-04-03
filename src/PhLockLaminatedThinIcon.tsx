import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockLaminatedThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIMTcyVjU2YTQ0LDQ0LDAsMCwwLTg4LDBWODRINDhBMTIsMTIsMCwwLDAsMzYsOTZWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY5NkExMiwxMiwwLDAsMCwyMDgsODRaTTQ0LDEyNEgyMTJ2MjRINDRabTAsMzJIMjEydjI0SDQ0Wk05Miw1NmEzNiwzNiwwLDAsMSw3MiwwVjg0SDkyWk00OCw5MkgyMDhhNCw0LDAsMCwxLDQsNHYyMEg0NFY5NkE0LDQsMCwwLDEsNDgsOTJaTTIwOCwyMTJINDhhNCw0LDAsMCwxLTQtNFYxODhIMjEydjIwQTQsNCwwLDAsMSwyMDgsMjEyWiIvPjwvc3ZnPg==)
 */
export function PhLockLaminatedThinIcon(props: PhLockLaminatedThinIconProps) {
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
      <path d="M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM44,124H212v24H44Zm0,32H212v24H44ZM92,56a36,36,0,0,1,72,0V84H92ZM48,92H208a4,4,0,0,1,4,4v20H44V96A4,4,0,0,1,48,92ZM208,212H48a4,4,0,0,1-4-4V188H212v20A4,4,0,0,1,208,212Z"/>
    </svg>
  );
}
