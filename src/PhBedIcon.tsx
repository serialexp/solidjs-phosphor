import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBedIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNzJIMzJWNDhhOCw4LDAsMCwwLTE2LDBWMjA4YTgsOCwwLDAsMCwxNiwwVjE3NkgyNDB2MzJhOCw4LDAsMCwwLDE2LDBWMTEyQTQwLDQwLDAsMCwwLDIxNiw3MlpNMzIsODhoNzJ2NzJIMzJabTg4LDcyVjg4aDk2YTI0LDI0LDAsMCwxLDI0LDI0djQ4WiIvPjwvc3ZnPg==)
 */
export function PhBedIcon(props: PhBedIconProps) {
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
      <path d="M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z"/>
    </svg>
  );
}
