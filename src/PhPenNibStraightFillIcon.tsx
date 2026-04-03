import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPenNibStraightFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIuMzMsMTIzLjg5Yy0uMDYtLjEzLS4xMi0uMjYtLjE5LS4zOEwxOTIsNjkuOTFWMzJhMTYsMTYsMCwwLDAtMTYtMTZIODBBMTYsMTYsMCwwLDAsNjQsMzJWNjkuOUwzMy44NiwxMjMuNTFjLS4wNy4xMi0uMTMuMjUtLjIuMzhhMTUuOTQsMTUuOTQsMCwwLDAsMS40NiwxNi41N2wuMTEuMTQsNzcuNjEsMTAwLjgxQTQsNCwwLDAsMCwxMjAsMjM5VjE1NC42M2EyNCwyNCwwLDEsMSwxNiwwVjIzOWE0LDQsMCwwLDAsNy4xNiwyLjQ0bDc3LjYtMTAwLjgxLjExLS4xNEExNS45MiwxNS45MiwwLDAsMCwyMjIuMzMsMTIzLjg5Wk0xNzYsNjRIODBWMzJoOTZaIi8+PC9zdmc+)
 */
export function PhPenNibStraightFillIcon(props: PhPenNibStraightFillIconProps) {
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
      <path d="M222.33,123.89c-.06-.13-.12-.26-.19-.38L192,69.91V32a16,16,0,0,0-16-16H80A16,16,0,0,0,64,32V69.9L33.86,123.51c-.07.12-.13.25-.2.38a15.94,15.94,0,0,0,1.46,16.57l.11.14,77.61,100.81A4,4,0,0,0,120,239V154.63a24,24,0,1,1,16,0V239a4,4,0,0,0,7.16,2.44l77.6-100.81.11-.14A15.92,15.92,0,0,0,222.33,123.89ZM176,64H80V32h96Z"/>
    </svg>
  );
}
