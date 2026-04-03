import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberSquareFourThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzZINDhBMTIsMTIsMCwwLDAsMzYsNDhWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY0OEExMiwxMiwwLDAsMCwyMDgsMzZabTQsMTcyYTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsNC00SDIwOGE0LDQsMCwwLDEsNCw0Wm0tNTItNjBIMTQ4VjgwYTQsNCwwLDAsMC03LjE2LTIuNDZsLTU2LDcyQTQsNCwwLDAsMCw4OCwxNTZoNTJ2MjBhNCw0LDAsMCwwLDgsMFYxNTZoMTJhNCw0LDAsMCwwLDAtOFptLTIwLDBIOTYuMThMMTQwLDkxLjY2WiIvPjwvc3ZnPg==)
 */
export function PhNumberSquareFourThinIcon(props: PhNumberSquareFourThinIconProps) {
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
      <path d="M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36Zm4,172a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-52-60H148V80a4,4,0,0,0-7.16-2.46l-56,72A4,4,0,0,0,88,156h52v20a4,4,0,0,0,8,0V156h12a4,4,0,0,0,0-8Zm-20,0H96.18L140,91.66Z"/>
    </svg>
  );
}
