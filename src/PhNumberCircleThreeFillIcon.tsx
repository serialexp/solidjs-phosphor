import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleThreeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0tNCwxNjRhMzUuNzEsMzUuNzEsMCwwLDEtMjUuNzEtMTAuODFBOCw4LDAsMSwxLDEwOS43MSwxNjYsMjAsMjAsMCwxLDAsMTI0LDEzMmE4LDgsMCwwLDEtNi41NS0xMi41OUwxMzYuNjMsOTJIMTA0YTgsOCwwLDAsMSwwLTE2aDQ4YTgsOCwwLDAsMSw2LjU1LDEyLjU5bC0yMSwzMEEzNiwzNiwwLDAsMSwxMjQsMTg4WiIvPjwvc3ZnPg==)
 */
export function PhNumberCircleThreeFillIcon(props: PhNumberCircleThreeFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,164a35.71,35.71,0,0,1-25.71-10.81A8,8,0,1,1,109.71,166,20,20,0,1,0,124,132a8,8,0,0,1-6.55-12.59L136.63,92H104a8,8,0,0,1,0-16h48a8,8,0,0,1,6.55,12.59l-21,30A36,36,0,0,1,124,188Z"/>
    </svg>
  );
}
