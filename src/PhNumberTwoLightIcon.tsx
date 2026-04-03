import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberTwoLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzQsMjA4YTYsNiwwLDAsMS02LDZIODhhNiw2LDAsMCwxLTQuOC05LjZsNzItOTUuOTJhMzQsMzQsMCwwLDAtMzEuODgtNTQuMTRBMzQuMSwzNC4xLDAsMCwwLDk2LjgzLDc0LjQxYTYsNiwwLDAsMS0xMS00LjgxLDQ2LjQ3LDQ2LjQ3LDAsMCwxLDUuNDMtOS4yOCw0Niw0NiwwLDAsMSw3My40OCw1NS4zN0wxMDAsMjAyaDY4QTYsNiwwLDAsMSwxNzQsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhNumberTwoLightIcon(props: PhNumberTwoLightIconProps) {
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
      <path d="M174,208a6,6,0,0,1-6,6H88a6,6,0,0,1-4.8-9.6l72-95.92a34,34,0,0,0-31.88-54.14A34.1,34.1,0,0,0,96.83,74.41a6,6,0,0,1-11-4.81,46.47,46.47,0,0,1,5.43-9.28,46,46,0,0,1,73.48,55.37L100,202h68A6,6,0,0,1,174,208Z"/>
    </svg>
  );
}
