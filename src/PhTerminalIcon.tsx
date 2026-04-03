import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTerminalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMTcuMzEsMTM0bC03Miw2NGE4LDgsMCwxLDEtMTAuNjMtMTJMMTAwLDEyOCwzNC42OSw3MEE4LDgsMCwxLDEsNDUuMzIsNThsNzIsNjRhOCw4LDAsMCwxLDAsMTJaTTIxNiwxODRIMTIwYTgsOCwwLDAsMCwwLDE2aDk2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhTerminalIcon(props: PhTerminalIconProps) {
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
      <path d="M117.31,134l-72,64a8,8,0,1,1-10.63-12L100,128,34.69,70A8,8,0,1,1,45.32,58l72,64a8,8,0,0,1,0,12ZM216,184H120a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
