import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCornersOutThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNDhWODhhNCw0LDAsMCwxLTgsMFY1MkgxNjhhNCw0LDAsMCwxLDAtOGg0MEE0LDQsMCwwLDEsMjEyLDQ4Wk04OCwyMDRINTJWMTY4YTQsNCwwLDAsMC04LDB2NDBhNCw0LDAsMCwwLDQsNEg4OGE0LDQsMCwwLDAsMC04Wm0xMjAtNDBhNCw0LDAsMCwwLTQsNHYzNkgxNjhhNCw0LDAsMCwwLDAsOGg0MGE0LDQsMCwwLDAsNC00VjE2OEE0LDQsMCwwLDAsMjA4LDE2NFpNODgsNDRINDhhNCw0LDAsMCwwLTQsNFY4OGE0LDQsMCwwLDAsOCwwVjUySDg4YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
export function PhCornersOutThinIcon(props: PhCornersOutThinIconProps) {
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
      <path d="M212,48V88a4,4,0,0,1-8,0V52H168a4,4,0,0,1,0-8h40A4,4,0,0,1,212,48ZM88,204H52V168a4,4,0,0,0-8,0v40a4,4,0,0,0,4,4H88a4,4,0,0,0,0-8Zm120-40a4,4,0,0,0-4,4v36H168a4,4,0,0,0,0,8h40a4,4,0,0,0,4-4V168A4,4,0,0,0,208,164ZM88,44H48a4,4,0,0,0-4,4V88a4,4,0,0,0,8,0V52H88a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
