import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLeftDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsODh2ODBhOCw4LDAsMCwxLTgsOEgxMjB2NDhMMjQsMTI4bDk2LTk2VjgwaDg4QTgsOCwwLDAsMSwyMTYsODhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMjA4LDcySDEyOFYzMmE4LDgsMCwwLDAtMTMuNjYtNS42NmwtOTYsOTZhOCw4LDAsMCwwLDAsMTEuMzJsOTYsOTZBOCw4LDAsMCwwLDEyOCwyMjRWMTg0aDgwYTE2LDE2LDAsMCwwLDE2LTE2Vjg4QTE2LDE2LDAsMCwwLDIwOCw3MlptMCw5NkgxMjBhOCw4LDAsMCwwLTgsOHYyOC42OUwzNS4zMSwxMjgsMTEyLDUxLjMxVjgwYTgsOCwwLDAsMCw4LDhoODhaIi8+PC9zdmc+)
 */
export function PhArrowFatLeftDuotoneIcon(props: PhArrowFatLeftDuotoneIconProps) {
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
      <path d="M216,88v80a8,8,0,0,1-8,8H120v48L24,128l96-96V80h88A8,8,0,0,1,216,88Z" opacity="0.2"/><path d="M208,72H128V32a8,8,0,0,0-13.66-5.66l-96,96a8,8,0,0,0,0,11.32l96,96A8,8,0,0,0,128,224V184h80a16,16,0,0,0,16-16V88A16,16,0,0,0,208,72Zm0,96H120a8,8,0,0,0-8,8v28.69L35.31,128,112,51.31V80a8,8,0,0,0,8,8h88Z"/>
    </svg>
  );
}
