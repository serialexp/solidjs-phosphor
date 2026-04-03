import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHandEyeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsMTgwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE0NCwxODBabTcyLTc2djQ4YTg4LDg4LDAsMCwxLTE3NiwwVjY0YTE2LDE2LDAsMCwxLDMyLDB2NTZhOCw4LDAsMCwwLDE2LDBWMzJhMTYsMTYsMCwwLDEsMzIsMHY4MGE4LDgsMCwwLDAsMTYsMFY0OGExNiwxNiwwLDAsMSwzMiwwdjgwYTgsOCwwLDAsMCwxNiwwVjEwNGExNiwxNiwwLDAsMSwzMiwwWm0tMzYuNDIsNzQuMjFjLS43LTEuNC0xNy41LTM0LjIxLTUxLjU4LTM0LjIxcy01MC44OCwzMi44MS01MS41OCwzNC4yMWE0LDQsMCwwLDAsMCwzLjU4Yy43LDEuNCwxNy41LDM0LjIxLDUxLjU4LDM0LjIxczUwLjg4LTMyLjgxLDUxLjU4LTM0LjIxQTQsNCwwLDAsMCwxNzkuNTgsMTc4LjIxWiIvPjwvc3ZnPg==)
 */
export function PhHandEyeFillIcon(props: PhHandEyeFillIconProps) {
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
      <path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm72-76v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V104a16,16,0,0,1,32,0Zm-36.42,74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88,32.81-51.58,34.21a4,4,0,0,0,0,3.58c.7,1.4,17.5,34.21,51.58,34.21s50.88-32.81,51.58-34.21A4,4,0,0,0,179.58,178.21Z"/>
    </svg>
  );
}
