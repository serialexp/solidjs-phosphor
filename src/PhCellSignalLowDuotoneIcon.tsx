import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalLowDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxNDAuN1YyMDhIMzJhOCw4LDAsMCwxLTUuNjYtMTMuNjZaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTk4LjEyLDI1LjIzYTE2LDE2LDAsMCwwLTE3LjQ0LDMuNDZsLTE2MCwxNjBBMTYsMTYsMCwwLDAsMzIsMjE2SDE5MmExNiwxNiwwLDAsMCwxNi0xNlY0MEExNS45NCwxNS45NCwwLDAsMCwxOTguMTIsMjUuMjNaTTcyLDE2MHY0MEgzMlptMTIwLDQwSDg4VjE0NEwxOTIsNDBaIi8+PC9zdmc+)
 */
export function PhCellSignalLowDuotoneIcon(props: PhCellSignalLowDuotoneIconProps) {
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
      <path d="M80,140.7V208H32a8,8,0,0,1-5.66-13.66Z" opacity="0.2"/><path d="M198.12,25.23a16,16,0,0,0-17.44,3.46l-160,160A16,16,0,0,0,32,216H192a16,16,0,0,0,16-16V40A15.94,15.94,0,0,0,198.12,25.23ZM72,160v40H32Zm120,40H88V144L192,40Z"/>
    </svg>
  );
}
