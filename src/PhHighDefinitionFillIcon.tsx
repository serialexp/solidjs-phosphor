import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHighDefinitionFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsMTI4YTMyLDMyLDAsMCwxLTMyLDMySDE1MlY5NmgxMkEzMiwzMiwwLDAsMSwxOTYsMTI4Wm0zNi03MlYyMDBhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNTZBMTYsMTYsMCwwLDEsNDAsNDBIMjE2QTE2LDE2LDAsMCwxLDIzMiw1NlpNMTIwLDg4YTgsOCwwLDAsMC0xNiwwdjMySDY0Vjg4YTgsOCwwLDAsMC0xNiwwdjgwYTgsOCwwLDAsMCwxNiwwVjEzNmg0MHYzMmE4LDgsMCwwLDAsMTYsMFptOTIsNDBhNDguMDUsNDguMDUsMCwwLDAtNDgtNDhIMTQ0YTgsOCwwLDAsMC04LDh2ODBhOCw4LDAsMCwwLDgsOGgyMEE0OC4wNSw0OC4wNSwwLDAsMCwyMTIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhHighDefinitionFillIcon(props: PhHighDefinitionFillIconProps) {
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
      <path d="M196,128a32,32,0,0,1-32,32H152V96h12A32,32,0,0,1,196,128Zm36-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,88a8,8,0,0,0-16,0v32H64V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V136h40v32a8,8,0,0,0,16,0Zm92,40a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h20A48.05,48.05,0,0,0,212,128Z"/>
    </svg>
  );
}
