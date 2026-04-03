import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGoodreadsLogoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY0MEExNiwxNiwwLDAsMCwyMDAsMjRaTTE3NiwxNjBhNDgsNDgsMCwwLDEtODYuNCwyOC44LDgsOCwwLDEsMSwxMi44LTkuNkEzMiwzMiwwLDAsMCwxNjAsMTYwVjE0Ny43NEE0OCw0OCwwLDAsMSw4MCwxMTJ2LThhNDgsNDgsMCwwLDEsODAtMzUuNzRWNjRhOCw4LDAsMCwxLDE2LDBabS0xNi01NnY4YTMyLDMyLDAsMCwxLTY0LDB2LThhMzIsMzIsMCwwLDEsNjQsMFoiLz48L3N2Zz4=)
 */
export function PhGoodreadsLogoFillIcon(props: PhGoodreadsLogoFillIconProps) {
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
      <path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM176,160a48,48,0,0,1-86.4,28.8,8,8,0,1,1,12.8-9.6A32,32,0,0,0,160,160V147.74A48,48,0,0,1,80,112v-8a48,48,0,0,1,80-35.74V64a8,8,0,0,1,16,0Zm-16-56v8a32,32,0,0,1-64,0v-8a32,32,0,0,1,64,0Z"/>
    </svg>
  );
}
