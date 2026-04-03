import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFramerLogoThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTA0VjQwYTQsNCwwLDAsMC00LTRINTZhNCw0LDAsMCwwLTIuNjYsN2w2NC4xNCw1N0g1NmE0LDQsMCwwLDAtNCw0djY0YTQsNCwwLDAsMCwxLjE3LDIuODNsNzIsNzJBNCw0LDAsMCwwLDEzMiwyNDBWMTcyaDY4YTQsNCwwLDAsMCwyLjY2LTdsLTY0LjE0LTU3SDIwMEE0LDQsMCwwLDAsMjA0LDEwNFptLTE0LjUyLDYwSDEyOGE0LDQsMCwwLDAtNCw0djYyLjM0bC02NC02NFYxMDhoNjYuNDhaTTE5NiwxMDBIMTI5LjUybC02My01NkgxOTZaIi8+PC9zdmc+)
 */
export function PhFramerLogoThinIcon(props: PhFramerLogoThinIconProps) {
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
      <path d="M204,104V40a4,4,0,0,0-4-4H56a4,4,0,0,0-2.66,7l64.14,57H56a4,4,0,0,0-4,4v64a4,4,0,0,0,1.17,2.83l72,72A4,4,0,0,0,132,240V172h68a4,4,0,0,0,2.66-7l-64.14-57H200A4,4,0,0,0,204,104Zm-14.52,60H128a4,4,0,0,0-4,4v62.34l-64-64V108h66.48ZM196,100H129.52l-63-56H196Z"/>
    </svg>
  );
}
