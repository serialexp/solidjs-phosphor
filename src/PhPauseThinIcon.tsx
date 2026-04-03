import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPauseThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMzZIMTYwYTEyLDEyLDAsMCwwLTEyLDEyVjIwOGExMiwxMiwwLDAsMCwxMiwxMmg0MGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDAsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRIMTYwYTQsNCwwLDAsMS00LTRWNDhhNCw0LDAsMCwxLDQtNGg0MGE0LDQsMCwwLDEsNCw0Wk05NiwzNkg1NkExMiwxMiwwLDAsMCw0NCw0OFYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIOTZhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsOTYsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINTZhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDk2YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
export function PhPauseThinIcon(props: PhPauseThinIconProps) {
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
      <path d="M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
