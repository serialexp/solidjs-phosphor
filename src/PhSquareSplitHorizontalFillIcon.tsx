import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSquareSplitHorizontalFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsNDRWMjEyYTQsNCwwLDAsMS00LDRINTZhMTYsMTYsMCwwLDEtMTYtMTZWNTZBMTYsMTYsMCwwLDEsNTYsNDBoNjBBNCw0LDAsMCwxLDEyMCw0NFptODAtNEgxNDBhNCw0LDAsMCwwLTQsNFYyMTJhNCw0LDAsMCwwLDQsNGg2MGExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMDAsNDBaIi8+PC9zdmc+)
 */
export function PhSquareSplitHorizontalFillIcon(props: PhSquareSplitHorizontalFillIconProps) {
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
      <path d="M120,44V212a4,4,0,0,1-4,4H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h60A4,4,0,0,1,120,44Zm80-4H140a4,4,0,0,0-4,4V212a4,4,0,0,0,4,4h60a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"/>
    </svg>
  );
}
