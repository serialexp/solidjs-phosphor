import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsMergeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNDB2NjRhOCw4LDAsMCwxLTIuMzQsNS42NkwxMzYsMTYzLjMxVjE5MmgyNGE4LDgsMCwwLDEsNS42NiwxMy42NmwtMzIsMzJhOCw4LDAsMCwxLTExLjMyLDBsLTMyLTMyQTgsOCwwLDAsMSw5NiwxOTJoMjRWMTYzLjMxTDY2LjM0LDEwOS42NkE4LDgsMCwwLDEsNjQsMTA0VjQwYTgsOCwwLDAsMSwxNiwwdjYwLjY5bDQ4LDQ4LDQ4LTQ4VjQwYTgsOCwwLDAsMSwxNiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowsMergeFillIcon(props: PhArrowsMergeFillIconProps) {
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
      <path d="M192,40v64a8,8,0,0,1-2.34,5.66L136,163.31V192h24a8,8,0,0,1,5.66,13.66l-32,32a8,8,0,0,1-11.32,0l-32-32A8,8,0,0,1,96,192h24V163.31L66.34,109.66A8,8,0,0,1,64,104V40a8,8,0,0,1,16,0v60.69l48,48,48-48V40a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
