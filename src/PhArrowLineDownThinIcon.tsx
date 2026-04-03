import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01My4xNywxMTQuODNhNCw0LDAsMCwxLDUuNjYtNS42NkwxMjQsMTc0LjM0VjMyYTQsNCwwLDAsMSw4LDBWMTc0LjM0bDY1LjE3LTY1LjE3YTQsNCwwLDEsMSw1LjY2LDUuNjZsLTcyLDcyYTQsNCwwLDAsMS01LjY2LDBaTTIxNiwyMTJINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFoiLz48L3N2Zz4=)
 */
export function PhArrowLineDownThinIcon(props: PhArrowLineDownThinIconProps) {
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
      <path d="M53.17,114.83a4,4,0,0,1,5.66-5.66L124,174.34V32a4,4,0,0,1,8,0V174.34l65.17-65.17a4,4,0,1,1,5.66,5.66l-72,72a4,4,0,0,1-5.66,0ZM216,212H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
