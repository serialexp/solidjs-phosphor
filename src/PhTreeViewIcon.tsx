import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTreeViewIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTUyaDMyYTE2LDE2LDAsMCwwLDE2LTE2VjEwNGExNiwxNiwwLDAsMC0xNi0xNkgxNzZhMTYsMTYsMCwwLDAtMTYsMTZ2OEg4OFY4MGg4YTE2LDE2LDAsMCwwLDE2LTE2VjMyQTE2LDE2LDAsMCwwLDk2LDE2SDY0QTE2LDE2LDAsMCwwLDQ4LDMyVjY0QTE2LDE2LDAsMCwwLDY0LDgwaDhWMTkyYTI0LDI0LDAsMCwwLDI0LDI0aDY0djhhMTYsMTYsMCwwLDAsMTYsMTZoMzJhMTYsMTYsMCwwLDAsMTYtMTZWMTkyYTE2LDE2LDAsMCwwLTE2LTE2SDE3NmExNiwxNiwwLDAsMC0xNiwxNnY4SDk2YTgsOCwwLDAsMS04LThWMTI4aDcydjhBMTYsMTYsMCwwLDAsMTc2LDE1MlpNNjQsMzJIOTZWNjRINjRaTTE3NiwxOTJoMzJ2MzJIMTc2Wm0wLTg4aDMydjMySDE3NloiLz48L3N2Zz4=)
 */
export function PhTreeViewIcon(props: PhTreeViewIconProps) {
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
      <path d="M176,152h32a16,16,0,0,0,16-16V104a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H88V80h8a16,16,0,0,0,16-16V32A16,16,0,0,0,96,16H64A16,16,0,0,0,48,32V64A16,16,0,0,0,64,80h8V192a24,24,0,0,0,24,24h64v8a16,16,0,0,0,16,16h32a16,16,0,0,0,16-16V192a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v8H96a8,8,0,0,1-8-8V128h72v8A16,16,0,0,0,176,152ZM64,32H96V64H64ZM176,192h32v32H176Zm0-88h32v32H176Z"/>
    </svg>
  );
}
