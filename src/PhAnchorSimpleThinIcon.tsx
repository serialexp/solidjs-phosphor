import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAnchorSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTE2SDIwMGE0LDQsMCwwLDAsMCw4aDE5LjkxQTkyLjEzLDkyLjEzLDAsMCwxLDEzMiwyMTEuOTFWOTEuNzFhMjgsMjgsMCwxLDAtOCwwdjEyMC4yQTkyLjEzLDkyLjEzLDAsMCwxLDM2LjA5LDEyNEg1NmE0LDQsMCwwLDAsMC04SDMyYTQsNCwwLDAsMC00LDQsMTAwLDEwMCwwLDAsMCwyMDAsMEE0LDQsMCwwLDAsMjI0LDExNlpNMTA4LDY0YTIwLDIwLDAsMSwxLDIwLDIwQTIwLDIwLDAsMCwxLDEwOCw2NFoiLz48L3N2Zz4=)
 */
export function PhAnchorSimpleThinIcon(props: PhAnchorSimpleThinIconProps) {
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
      <path d="M224,116H200a4,4,0,0,0,0,8h19.91A92.13,92.13,0,0,1,132,211.91V91.71a28,28,0,1,0-8,0v120.2A92.13,92.13,0,0,1,36.09,124H56a4,4,0,0,0,0-8H32a4,4,0,0,0-4,4,100,100,0,0,0,200,0A4,4,0,0,0,224,116ZM108,64a20,20,0,1,1,20,20A20,20,0,0,1,108,64Z"/>
    </svg>
  );
}
