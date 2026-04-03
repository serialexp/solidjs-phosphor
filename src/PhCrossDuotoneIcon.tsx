import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCrossDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODh2MzJhOCw4LDAsMCwxLTgsOEgxNTJ2OTZhOCw4LDAsMCwxLTgsOEgxMTJhOCw4LDAsMCwxLTgtOFYxMjhINTZhOCw4LDAsMCwxLTgtOFY4OGE4LDgsMCwwLDEsOC04aDQ4VjMyYTgsOCwwLDAsMSw4LThoMzJhOCw4LDAsMCwxLDgsOFY4MGg0OEE4LDgsMCwwLDEsMjA4LDg4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwMCw3MkgxNjBWMzJhMTYsMTYsMCwwLDAtMTYtMTZIMTEyQTE2LDE2LDAsMCwwLDk2LDMyVjcySDU2QTE2LDE2LDAsMCwwLDQwLDg4djMyYTE2LDE2LDAsMCwwLDE2LDE2SDk2djg4YTE2LDE2LDAsMCwwLDE2LDE2aDMyYTE2LDE2LDAsMCwwLDE2LTE2VjEzNmg0MGExNiwxNiwwLDAsMCwxNi0xNlY4OEExNiwxNiwwLDAsMCwyMDAsNzJabTAsNDhIMTUyYTgsOCwwLDAsMC04LDh2OTZIMTEyVjEyOGE4LDgsMCwwLDAtOC04SDU2Vjg4aDQ4YTgsOCwwLDAsMCw4LThWMzJoMzJWODBhOCw4LDAsMCwwLDgsOGg0OFoiLz48L3N2Zz4=)
 */
export function PhCrossDuotoneIcon(props: PhCrossDuotoneIconProps) {
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
      <path d="M208,88v32a8,8,0,0,1-8,8H152v96a8,8,0,0,1-8,8H112a8,8,0,0,1-8-8V128H56a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8h48V32a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V80h48A8,8,0,0,1,208,88Z" opacity="0.2"/><path d="M200,72H160V32a16,16,0,0,0-16-16H112A16,16,0,0,0,96,32V72H56A16,16,0,0,0,40,88v32a16,16,0,0,0,16,16H96v88a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V136h40a16,16,0,0,0,16-16V88A16,16,0,0,0,200,72Zm0,48H152a8,8,0,0,0-8,8v96H112V128a8,8,0,0,0-8-8H56V88h48a8,8,0,0,0,8-8V32h32V80a8,8,0,0,0,8,8h48Z"/>
    </svg>
  );
}
