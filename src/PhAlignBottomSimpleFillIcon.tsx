import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjMyYTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZIMjAwQTgsOCwwLDAsMSwyMDgsMjMyWk05NiwyMDhoNjRhMTYsMTYsMCwwLDAsMTYtMTZWNDBhMTYsMTYsMCwwLDAtMTYtMTZIOTZBMTYsMTYsMCwwLDAsODAsNDBWMTkyQTE2LDE2LDAsMCwwLDk2LDIwOFoiLz48L3N2Zz4=)
 */
export function PhAlignBottomSimpleFillIcon(props: PhAlignBottomSimpleFillIconProps) {
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
      <path d="M208,232a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,232ZM96,208h64a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H96A16,16,0,0,0,80,40V192A16,16,0,0,0,96,208Z"/>
    </svg>
  );
}
