import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPintGlassThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDMsMjkuMzVBNCw0LDAsMCwwLDIwMCwyOEg1NmE0LDQsMCwwLDAtNCw0LjQ4bDIzLjE1LDE5M0ExMiwxMiwwLDAsMCw4Ny4xLDIzNmg4MS44YTEyLDEyLDAsMCwwLDExLjkyLTEwLjU3TDIwNCwzMi40OEE0LDQsMCwwLDAsMjAzLDI5LjM1Wk0xOTUuNDksMzZsLTMuODQsMzJINjQuMzVMNjAuNTEsMzZaTTE3Mi44NywyMjQuNDhhNCw0LDAsMCwxLTQsMy41Mkg4Ny4xYTQsNCwwLDAsMS00LTMuNTJMNjUuMzEsNzZIMTkwLjY5WiIvPjwvc3ZnPg==)
 */
export function PhPintGlassThinIcon(props: PhPintGlassThinIconProps) {
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
      <path d="M203,29.35A4,4,0,0,0,200,28H56a4,4,0,0,0-4,4.48l23.15,193A12,12,0,0,0,87.1,236h81.8a12,12,0,0,0,11.92-10.57L204,32.48A4,4,0,0,0,203,29.35ZM195.49,36l-3.84,32H64.35L60.51,36ZM172.87,224.48a4,4,0,0,1-4,3.52H87.1a4,4,0,0,1-4-3.52L65.31,76H190.69Z"/>
    </svg>
  );
}
