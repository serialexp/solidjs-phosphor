import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMagnifyingGlassMinusBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTYsMTEyYTEyLDEyLDAsMCwxLTEyLDEySDgwYTEyLDEyLDAsMCwxLDAtMjRoNjRBMTIsMTIsMCwwLDEsMTU2LDExMlptNzYuNDksMTIwLjQ5YTEyLDEyLDAsMCwxLTE3LDBMMTY4LDE4NWE5Mi4xMiw5Mi4xMiwwLDEsMSwxNy0xN2w0Ny41NCw0Ny41M0ExMiwxMiwwLDAsMSwyMzIuNDksMjMyLjQ5Wk0xMTIsMTgwYTY4LDY4LDAsMSwwLTY4LTY4QTY4LjA4LDY4LjA4LDAsMCwwLDExMiwxODBaIi8+PC9zdmc+)
 */
export function PhMagnifyingGlassMinusBoldIcon(props: PhMagnifyingGlassMinusBoldIconProps) {
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
      <path d="M156,112a12,12,0,0,1-12,12H80a12,12,0,0,1,0-24h64A12,12,0,0,1,156,112Zm76.49,120.49a12,12,0,0,1-17,0L168,185a92.12,92.12,0,1,1,17-17l47.54,47.53A12,12,0,0,1,232.49,232.49ZM112,180a68,68,0,1,0-68-68A68.08,68.08,0,0,0,112,180Z"/>
    </svg>
  );
}
