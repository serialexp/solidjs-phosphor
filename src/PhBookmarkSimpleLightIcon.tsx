import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookmarkSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMzRINzJBMTQsMTQsMCwwLDAsNTgsNDhWMjI0YTYsNiwwLDAsMCw5LjE4LDUuMDlsNjAuODEtMzgsNjAuODMsMzhBNiw2LDAsMCwwLDE5OCwyMjRWNDhBMTQsMTQsMCwwLDAsMTg0LDM0Wm0yLDE3OS4xNy01NC44My0zNC4yNmE2LDYsMCwwLDAtNi4zNiwwTDcwLDIxMy4xN1Y0OGEyLDIsMCwwLDEsMi0ySDE4NGEyLDIsMCwwLDEsMiwyWiIvPjwvc3ZnPg==)
 */
export function PhBookmarkSimpleLightIcon(props: PhBookmarkSimpleLightIconProps) {
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
      <path d="M184,34H72A14,14,0,0,0,58,48V224a6,6,0,0,0,9.18,5.09l60.81-38,60.83,38A6,6,0,0,0,198,224V48A14,14,0,0,0,184,34Zm2,179.17-54.83-34.26a6,6,0,0,0-6.36,0L70,213.17V48a2,2,0,0,1,2-2H184a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
