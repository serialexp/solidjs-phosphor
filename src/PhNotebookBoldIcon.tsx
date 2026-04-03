import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotebookBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTA4YTEyLDEyLDAsMCwxLDEyLTEyaDU2YTEyLDEyLDAsMCwxLDAsMjRIMTIwQTEyLDEyLDAsMCwxLDEwOCwxMDhabTY4LDI4SDEyMGExMiwxMiwwLDAsMCwwLDI0aDU2YTEyLDEyLDAsMCwwLDAtMjRabTUyLTg4VjIwOGEyMCwyMCwwLDAsMS0yMCwyMEg0OGEyMCwyMCwwLDAsMS0yMC0yMFY0OEEyMCwyMCwwLDAsMSw0OCwyOEgyMDhBMjAsMjAsMCwwLDEsMjI4LDQ4Wk01MiwyMDRINjhWNTJINTJaTTIwNCw1Mkg5MlYyMDRIMjA0WiIvPjwvc3ZnPg==)
 */
export function PhNotebookBoldIcon(props: PhNotebookBoldIconProps) {
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
      <path d="M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z"/>
    </svg>
  );
}
