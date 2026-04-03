import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMicroscopeDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzYsMzJWMTM2YTgsOCwwLDAsMS04LDhIODBhOCw4LDAsMCwxLTgtOFYzMmE4LDgsMCwwLDEsOC04aDQ4QTgsOCwwLDAsMSwxMzYsMzJaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjI0LDIwOEgyMDMuOTRBODguMDUsODguMDUsMCwwLDAsMTQ0LDY0LjM3VjMyYTE2LDE2LDAsMCwwLTE2LTE2SDgwQTE2LDE2LDAsMCwwLDY0LDMyVjEzNmExNiwxNiwwLDAsMCwxNiwxNmg0OGExNiwxNiwwLDAsMCwxNi0xNlY4MC40NkE3Miw3MiwwLDAsMSwxODEuMjUsMjA4SDMyYTgsOCwwLDAsMCwwLDE2SDIyNGE4LDgsMCwwLDAsMC0xNlptLTk2LTcySDgwVjMyaDQ4VjEzNlpNNzIsMTg0YTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhMicroscopeDuotoneIcon(props: PhMicroscopeDuotoneIconProps) {
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
      <path d="M136,32V136a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8h48A8,8,0,0,1,136,32Z" opacity="0.2"/><path d="M224,208H203.94A88.05,88.05,0,0,0,144,64.37V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V136a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V80.46A72,72,0,0,1,181.25,208H32a8,8,0,0,0,0,16H224a8,8,0,0,0,0-16Zm-96-72H80V32h48V136ZM72,184a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
