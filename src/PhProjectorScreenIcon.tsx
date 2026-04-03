import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhProjectorScreenIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNjRWNDhhMTYsMTYsMCwwLDAtMTYtMTZINDBBMTYsMTYsMCwwLDAsMjQsNDhWNjRBMTYsMTYsMCwwLDAsNDAsODB2OTZIMzJhOCw4LDAsMCwwLDAsMTZoODh2MTcuMzhhMjQsMjQsMCwxLDAsMTYsMFYxOTJoODhhOCw4LDAsMCwwLDAtMTZoLThWODBBMTYsMTYsMCwwLDAsMjMyLDY0Wk0xMjgsMjQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwyNDBaTTQwLDQ4SDIxNlY2NEg0MFpNMjAwLDE3Nkg1NlY4MEgyMDBaIi8+PC9zdmc+)
 */
export function PhProjectorScreenIcon(props: PhProjectorScreenIconProps) {
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
      <path d="M232,64V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V64A16,16,0,0,0,40,80v96H32a8,8,0,0,0,0,16h88v17.38a24,24,0,1,0,16,0V192h88a8,8,0,0,0,0-16h-8V80A16,16,0,0,0,232,64ZM128,240a8,8,0,1,1,8-8A8,8,0,0,1,128,240ZM40,48H216V64H40ZM200,176H56V80H200Z"/>
    </svg>
  );
}
