import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandSoapFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsOTYuOFY4OGEzMiwzMiwwLDAsMC0zMi0zMkgxMzZWMzJoMzJhOCw4LDAsMCwxLDgsOCw4LDgsMCwwLDAsMTYsMCwyNCwyNCwwLDAsMC0yNC0yNEgxMDRhOCw4LDAsMCwwLDAsMTZoMTZWNTZIMTA0QTMyLDMyLDAsMCwwLDcyLDg4djguOEE0MC4wNyw0MC4wNywwLDAsMCw0MCwxMzZ2ODBhMTYsMTYsMCwwLDAsMTYsMTZIMjAwYTE2LDE2LDAsMCwwLDE2LTE2VjEzNkE0MC4wNyw0MC4wNywwLDAsMCwxODQsOTYuOFpNMTA0LDcyaDQ4YTE2LDE2LDAsMCwxLDE2LDE2djhIODhWODhBMTYsMTYsMCwwLDEsMTA0LDcyWiIvPjwvc3ZnPg==)
 */
export function PhHandSoapFillIcon(props: PhHandSoapFillIconProps) {
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
      <path d="M184,96.8V88a32,32,0,0,0-32-32H136V32h32a8,8,0,0,1,8,8,8,8,0,0,0,16,0,24,24,0,0,0-24-24H104a8,8,0,0,0,0,16h16V56H104A32,32,0,0,0,72,88v8.8A40.07,40.07,0,0,0,40,136v80a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V136A40.07,40.07,0,0,0,184,96.8ZM104,72h48a16,16,0,0,1,16,16v8H88V88A16,16,0,0,1,104,72Z"/>
    </svg>
  );
}
