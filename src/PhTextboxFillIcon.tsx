import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextboxFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsODB2OTZhMTYsMTYsMCwwLDEtMTYsMTZIMTQwYTQsNCwwLDAsMS00LTRWNjhhNCw0LDAsMCwxLDQtNGg5MkExNiwxNiwwLDAsMSwyNDgsODBaTTEyMCw0OFYyMDhhOCw4LDAsMCwxLTE2LDBWMTkySDI0QTE2LDE2LDAsMCwxLDgsMTc2VjgwQTE2LDE2LDAsMCwxLDI0LDY0aDgwVjQ4YTgsOCwwLDAsMSwxNiwwWk04OCwxMTJhOCw4LDAsMCwwLTgtOEg0OGE4LDgsMCwwLDAsMCwxNmg4djI0YTgsOCwwLDAsMCwxNiwwVjEyMGg4QTgsOCwwLDAsMCw4OCwxMTJaIi8+PC9zdmc+)
 */
export function PhTextboxFillIcon(props: PhTextboxFillIconProps) {
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
      <path d="M248,80v96a16,16,0,0,1-16,16H140a4,4,0,0,1-4-4V68a4,4,0,0,1,4-4h92A16,16,0,0,1,248,80ZM120,48V208a8,8,0,0,1-16,0V192H24A16,16,0,0,1,8,176V80A16,16,0,0,1,24,64h80V48a8,8,0,0,1,16,0ZM88,112a8,8,0,0,0-8-8H48a8,8,0,0,0,0,16h8v24a8,8,0,0,0,16,0V120h8A8,8,0,0,0,88,112Z"/>
    </svg>
  );
}
