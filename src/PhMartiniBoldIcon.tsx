import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMartiniBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMDksMzUuNDFBMTIsMTIsMCwwLDAsMjMyLDI4SDI0YTEyLDEyLDAsMCwwLTguNDgsMjAuNDlMMTE2LDE0OXY1NUg4OGExMiwxMiwwLDAsMCwwLDI0aDgwYTEyLDEyLDAsMCwwLDAtMjRIMTQwVjE0OUwyNDAuNDgsNDguNDlBMTIsMTIsMCwwLDAsMjQzLjA5LDM1LjQxWk0yMDMsNTIsMTkxLDY0SDY1TDUzLDUyWm0tNzUsNzVMODksODhIMTY3WiIvPjwvc3ZnPg==)
 */
export function PhMartiniBoldIcon(props: PhMartiniBoldIconProps) {
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
      <path d="M243.09,35.41A12,12,0,0,0,232,28H24a12,12,0,0,0-8.48,20.49L116,149v55H88a12,12,0,0,0,0,24h80a12,12,0,0,0,0-24H140V149L240.48,48.49A12,12,0,0,0,243.09,35.41ZM203,52,191,64H65L53,52Zm-75,75L89,88H167Z"/>
    </svg>
  );
}
