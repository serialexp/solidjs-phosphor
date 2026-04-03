import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjMyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMjMyWk04MCwxOTJWNDBBMTYsMTYsMCwwLDEsOTYsMjRoNjRhMTYsMTYsMCwwLDEsMTYsMTZWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDk2QTE2LDE2LDAsMCwxLDgwLDE5MlptMTYsMGg2NFY0MEg5NloiLz48L3N2Zz4=)
 */
export function PhAlignBottomSimpleIcon(props: PhAlignBottomSimpleIconProps) {
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
      <path d="M208,232a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,232ZM80,192V40A16,16,0,0,1,96,24h64a16,16,0,0,1,16,16V192a16,16,0,0,1-16,16H96A16,16,0,0,1,80,192Zm16,0h64V40H96Z"/>
    </svg>
  );
}
