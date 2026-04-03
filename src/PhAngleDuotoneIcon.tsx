import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAngleDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTY4djMySDcyVjcyaDMyQTk2LDk2LDAsMCwxLDIwMCwxNjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNOTYsNzJhOCw4LDAsMCwxLDgtOEExMDQuMTEsMTA0LjExLDAsMCwxLDIwOCwxNjhhOCw4LDAsMCwxLTE2LDAsODguMSw4OC4xLDAsMCwwLTg4LTg4QTgsOCwwLDAsMSw5Niw3MlpNMjQwLDE5Mkg4MFYzMmE4LDgsMCwwLDAtMTYsMFY2NEgzMmE4LDgsMCwwLDAsMCwxNkg2NFYyMDBhOCw4LDAsMCwwLDgsOEgyNDBhOCw4LDAsMCwwLDAtMTZaIi8+PC9zdmc+)
 */
export function PhAngleDuotoneIcon(props: PhAngleDuotoneIconProps) {
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
      <path d="M200,168v32H72V72h32A96,96,0,0,1,200,168Z" opacity="0.2"/><path d="M96,72a8,8,0,0,1,8-8A104.11,104.11,0,0,1,208,168a8,8,0,0,1-16,0,88.1,88.1,0,0,0-88-88A8,8,0,0,1,96,72ZM240,192H80V32a8,8,0,0,0-16,0V64H32a8,8,0,0,0,0,16H64V200a8,8,0,0,0,8,8H240a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
