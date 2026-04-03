import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownRightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjEuNjYsMTgxLjY2bC00OCw0OEE4LDgsMCwwLDEsMTYwLDIyNFYxODRINzJhOCw4LDAsMCwxLTgtOFYzMmE4LDgsMCwwLDEsMTYsMFYxNjhoODBWMTI4YTgsOCwwLDAsMSwxMy42Ni01LjY2bDQ4LDQ4QTgsOCwwLDAsMSwyMjEuNjYsMTgxLjY2WiIvPjwvc3ZnPg==)
 */
export function PhArrowElbowDownRightFillIcon(props: PhArrowElbowDownRightFillIconProps) {
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
      <path d="M221.66,181.66l-48,48A8,8,0,0,1,160,224V184H72a8,8,0,0,1-8-8V32a8,8,0,0,1,16,0V168h80V128a8,8,0,0,1,13.66-5.66l48,48A8,8,0,0,1,221.66,181.66Z"/>
    </svg>
  );
}
