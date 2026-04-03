import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhJoystickFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTYwdjQ4YTE2LDE2LDAsMCwxLTE2LDE2SDQ4YTE2LDE2LDAsMCwxLTE2LTE2VjE2MGExNiwxNiwwLDAsMSwxNi0xNmg3MlY5NS4xOWE0MCw0MCwwLDEsMSwxNiwwVjE0NGg3MkExNiwxNiwwLDAsMSwyMjQsMTYwWm0tNjQtNDBhOCw4LDAsMCwwLDgsOGgzMmE4LDgsMCwwLDAsMC0xNkgxNjhBOCw4LDAsMCwwLDE2MCwxMjBaIi8+PC9zdmc+)
 */
export function PhJoystickFillIcon(props: PhJoystickFillIconProps) {
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
      <path d="M224,160v48a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16h72V95.19a40,40,0,1,1,16,0V144h72A16,16,0,0,1,224,160Zm-64-40a8,8,0,0,0,8,8h32a8,8,0,0,0,0-16H168A8,8,0,0,0,160,120Z"/>
    </svg>
  );
}
