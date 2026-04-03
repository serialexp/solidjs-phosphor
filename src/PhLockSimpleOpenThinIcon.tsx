import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockSimpleOpenThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIOTJWNTZhMzYsMzYsMCwwLDEsMzYtMzZjMTcuMjQsMCwzMi43NSwxMi4zOCwzNi4wOCwyOC44YTQsNCwwLDEsMCw3Ljg0LTEuNkMxNjcuNzgsMjYuODEsMTQ5LjMxLDEyLDEyOCwxMkE0NC4wNSw0NC4wNSwwLDAsMCw4NCw1NlY4NEg0OEExMiwxMiwwLDAsMCwzNiw5NlYyMDhhMTIsMTIsMCwwLDAsMTIsMTJIMjA4YTEyLDEyLDAsMCwwLDEyLTEyVjk2QTEyLDEyLDAsMCwwLDIwOCw4NFptNCwxMjRhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00Vjk2YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRaIi8+PC9zdmc+)
 */
export function PhLockSimpleOpenThinIcon(props: PhLockSimpleOpenThinIconProps) {
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
      <path d="M208,84H92V56a36,36,0,0,1,36-36c17.24,0,32.75,12.38,36.08,28.8a4,4,0,1,0,7.84-1.6C167.78,26.81,149.31,12,128,12A44.05,44.05,0,0,0,84,56V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84Zm4,124a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Z"/>
    </svg>
  );
}
