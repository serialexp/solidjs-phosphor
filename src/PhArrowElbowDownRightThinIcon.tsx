import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTguODMsMTc4LjgzbC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2TDIwNi4zNCwxODBINzJhNCw0LDAsMCwxLTQtNFYzMmE0LDQsMCwwLDEsOCwwVjE3MkgyMDYuMzRsLTQxLjE3LTQxLjE3YTQsNCwwLDEsMSw1LjY2LTUuNjZsNDgsNDhBNCw0LDAsMCwxLDIxOC44MywxNzguODNaIi8+PC9zdmc+)
 */
export function PhArrowElbowDownRightThinIcon(props: PhArrowElbowDownRightThinIconProps) {
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
      <path d="M218.83,178.83l-48,48a4,4,0,0,1-5.66-5.66L206.34,180H72a4,4,0,0,1-4-4V32a4,4,0,0,1,8,0V172H206.34l-41.17-41.17a4,4,0,1,1,5.66-5.66l48,48A4,4,0,0,1,218.83,178.83Z"/>
    </svg>
  );
}
