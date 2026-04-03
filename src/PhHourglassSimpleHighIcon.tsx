import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHourglassSimpleHighIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuMTgsMTk2LjU2LDEzOS41NywxMjhsNzEuNjEtNjguNTZhMS41OSwxLjU5LDAsMCwxLC4xMy0uMTNBMTYsMTYsMCwwLDAsMjAwLDMySDU2QTE2LDE2LDAsMCwwLDQ0LjcsNTkuMzFsLjEyLjEzTDExNi40MywxMjgsNDQuODIsMTk2LjU2bC0uMTIuMTNBMTYsMTYsMCwwLDAsNTYsMjI0SDIwMGExNiwxNiwwLDAsMCwxMS4zMi0yNy4zMUExLjU5LDEuNTksMCwwLDEsMjExLjE4LDE5Ni41NlpNNTYsNDhoMHYwWk04OS40Myw4MGg3Ny4xNEwxMjgsMTE2LjkyWk0yMDAsNDhsLTE2LjcsMTZINzIuNzJMNTYsNDhaTTU2LDIwOGw3Mi02OC45MkwyMDAsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhHourglassSimpleHighIcon(props: PhHourglassSimpleHighIconProps) {
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
      <path d="M211.18,196.56,139.57,128l71.61-68.56a1.59,1.59,0,0,1,.13-.13A16,16,0,0,0,200,32H56A16,16,0,0,0,44.7,59.31l.12.13L116.43,128,44.82,196.56l-.12.13A16,16,0,0,0,56,224H200a16,16,0,0,0,11.32-27.31A1.59,1.59,0,0,1,211.18,196.56ZM56,48h0v0ZM89.43,80h77.14L128,116.92ZM200,48l-16.7,16H72.72L56,48ZM56,208l72-68.92L200,208Z"/>
    </svg>
  );
}
