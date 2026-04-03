import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBracketsAngleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05MC4xMiw0Ni40NCwzOC4yMiwxMjhsNTEuOSw4MS41NmExMiwxMiwwLDEsMS0yMC4yNCwxMi44OGwtNTYtODhhMTIsMTIsMCwwLDEsMC0xMi44OGw1Ni04OEExMiwxMiwwLDAsMSw5MC4xMiw0Ni40NFptMTUyLDc1LjEyLTU2LTg4YTEyLDEyLDAsMSwwLTIwLjI0LDEyLjg4TDIxNy43OCwxMjhsLTUxLjksODEuNTZhMTIsMTIsMCwxLDAsMjAuMjQsMTIuODhsNTYtODhBMTIsMTIsMCwwLDAsMjQyLjEyLDEyMS41NloiLz48L3N2Zz4=)
 */
export function PhBracketsAngleBoldIcon(props: PhBracketsAngleBoldIconProps) {
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
      <path d="M90.12,46.44,38.22,128l51.9,81.56a12,12,0,1,1-20.24,12.88l-56-88a12,12,0,0,1,0-12.88l56-88A12,12,0,0,1,90.12,46.44Zm152,75.12-56-88a12,12,0,1,0-20.24,12.88L217.78,128l-51.9,81.56a12,12,0,1,0,20.24,12.88l56-88A12,12,0,0,0,242.12,121.56Z"/>
    </svg>
  );
}
