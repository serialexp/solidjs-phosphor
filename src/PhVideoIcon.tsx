import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVideoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQuNDQsMTA1LjM0bC00OC0zMkE4LDgsMCwwLDAsMTA0LDgwdjY0YTgsOCwwLDAsMCwxMi40NCw2LjY2bDQ4LTMyYTgsOCwwLDAsMCwwLTEzLjMyWk0xMjAsMTI5LjA1Vjk1bDI1LjU4LDE3Wk0yMTYsNDBINDBBMTYsMTYsMCwwLDAsMjQsNTZWMTY4YTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY1NkExNiwxNiwwLDAsMCwyMTYsNDBabTAsMTI4SDQwVjU2SDIxNlYxNjhabTE2LDQwYTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLDAtMTZIMjI0QTgsOCwwLDAsMSwyMzIsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhVideoIcon(props: PhVideoIconProps) {
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
      <path d="M164.44,105.34l-48-32A8,8,0,0,0,104,80v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,129.05V95l25.58,17ZM216,40H40A16,16,0,0,0,24,56V168a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,128H40V56H216V168Zm16,40a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Z"/>
    </svg>
  );
}
