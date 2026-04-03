import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhColumnsPlusLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMjhIMTAwQTIwLDIwLDAsMCwwLDgwLDQ4VjIwOGEyMCwyMCwwLDAsMCwyMCwyMGgyNGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwxMjQsMjhabS00LDE3NkgxMDRWNTJoMTZaTTIwMCwyOEgxNzZhMjAsMjAsMCwwLDAtMjAsMjBWMjA4YTIwLDIwLDAsMCwwLDIwLDIwaDI0YTIwLDIwLDAsMCwwLDIwLTIwVjQ4QTIwLDIwLDAsMCwwLDIwMCwyOFptLTQsMTc2SDE4MFY1MmgxNlpNNjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDQ4djhhMTIsMTIsMCwwLDEtMjQsMHYtOEgxNmExMiwxMiwwLDAsMSwwLTI0aDh2LThhMTIsMTIsMCwwLDEsMjQsMHY4aDhBMTIsMTIsMCwwLDEsNjgsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhColumnsPlusLeftBoldIcon(props: PhColumnsPlusLeftBoldIconProps) {
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
      <path d="M124,28H100A20,20,0,0,0,80,48V208a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V48A20,20,0,0,0,124,28Zm-4,176H104V52h16ZM200,28H176a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h24a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H180V52h16ZM68,128a12,12,0,0,1-12,12H48v8a12,12,0,0,1-24,0v-8H16a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,68,128Z"/>
    </svg>
  );
}
