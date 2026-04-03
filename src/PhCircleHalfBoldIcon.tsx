import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCircleHalfBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjBBMTA4LDEwOCwwLDEsMCwyMzYsMTI4LDEwOC4xMiwxMDguMTIsMCwwLDAsMTI4LDIwWm0xMiwyNC44N2E4My41Myw4My41MywwLDAsMSwyNCw3LjI1VjIwMy44OGE4My41Myw4My41MywwLDAsMS0yNCw3LjI1Wk00NCwxMjhhODQuMTIsODQuMTIsMCwwLDEsNzItODMuMTNWMjExLjEzQTg0LjEyLDg0LjEyLDAsMCwxLDQ0LDEyOFptMTQ0LDU4LjcxVjY5LjI5YTgzLjgxLDgzLjgxLDAsMCwxLDAsMTE3LjQyWiIvPjwvc3ZnPg==)
 */
export function PhCircleHalfBoldIcon(props: PhCircleHalfBoldIconProps) {
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
      <path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,24.87a83.53,83.53,0,0,1,24,7.25V203.88a83.53,83.53,0,0,1-24,7.25ZM44,128a84.12,84.12,0,0,1,72-83.13V211.13A84.12,84.12,0,0,1,44,128Zm144,58.71V69.29a83.81,83.81,0,0,1,0,117.42Z"/>
    </svg>
  );
}
