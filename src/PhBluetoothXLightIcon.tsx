import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBluetoothXLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzkuNiwxNzEuMiwxMjIsMTI4bDI1LjYtMTkuMmE2LDYsMCwxLDAtNy4yLTkuNkwxMTgsMTE2VjQ0bDIyLjQsMTYuOGE2LDYsMCwxLDAsNy4yLTkuNmwtMzItMjRBNiw2LDAsMCwwLDEwNiwzMnY4NEw1MS42LDc1LjJhNiw2LDAsMCwwLTcuMiw5LjZMMTAyLDEyOCw0NC40LDE3MS4yYTYsNiwwLDAsMCw3LjIsOS42TDEwNiwxNDB2ODRhNiw2LDAsMCwwLDkuNiw0LjhsNjQtNDhhNiw2LDAsMCwwLDAtOS42Wk0xMTgsMjEyVjE0MGw0OCwzNlpNMjM2LjI0LDk5Ljc2YTYsNiwwLDEsMS04LjQ4LDguNDhMMjA4LDg4LjQ5bC0xOS43NiwxOS43NWE2LDYsMCwwLDEtOC40OC04LjQ4TDE5OS41MSw4MCwxNzkuNzYsNjAuMjRhNiw2LDAsMCwxLDguNDgtOC40OEwyMDgsNzEuNTFsMTkuNzYtMTkuNzVhNiw2LDAsMCwxLDguNDgsOC40OEwyMTYuNDksODBaIi8+PC9zdmc+)
 */
export function PhBluetoothXLightIcon(props: PhBluetoothXLightIconProps) {
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
      <path d="M179.6,171.2,122,128l25.6-19.2a6,6,0,1,0-7.2-9.6L118,116V44l22.4,16.8a6,6,0,1,0,7.2-9.6l-32-24A6,6,0,0,0,106,32v84L51.6,75.2a6,6,0,0,0-7.2,9.6L102,128,44.4,171.2a6,6,0,0,0,7.2,9.6L106,140v84a6,6,0,0,0,9.6,4.8l64-48a6,6,0,0,0,0-9.6ZM118,212V140l48,36ZM236.24,99.76a6,6,0,1,1-8.48,8.48L208,88.49l-19.76,19.75a6,6,0,0,1-8.48-8.48L199.51,80,179.76,60.24a6,6,0,0,1,8.48-8.48L208,71.51l19.76-19.75a6,6,0,0,1,8.48,8.48L216.49,80Z"/>
    </svg>
  );
}
