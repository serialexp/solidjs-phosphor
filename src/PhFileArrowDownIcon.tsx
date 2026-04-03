import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileArrowDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsODIuMzRsLTU2LTU2QTgsOCwwLDAsMCwxNTIsMjRINTZBMTYsMTYsMCwwLDAsNDAsNDBWMjE2YTE2LDE2LDAsMCwwLDE2LDE2SDIwMGExNiwxNiwwLDAsMCwxNi0xNlY4OEE4LDgsMCwwLDAsMjEzLjY2LDgyLjM0Wk0xNjAsNTEuMzEsMTg4LjY5LDgwSDE2MFpNMjAwLDIxNkg1NlY0MGg4OFY4OGE4LDgsMCwwLDAsOCw4aDQ4VjIxNlptLTQyLjM0LTYxLjY2YTgsOCwwLDAsMSwwLDExLjMybC0yNCwyNGE4LDgsMCwwLDEtMTEuMzIsMGwtMjQtMjRhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyMCwxNjQuNjlWMTIwYTgsOCwwLDAsMSwxNiwwdjQ0LjY5bDEwLjM0LTEwLjM1QTgsOCwwLDAsMSwxNTcuNjYsMTU0LjM0WiIvPjwvc3ZnPg==)
 */
export function PhFileArrowDownIcon(props: PhFileArrowDownIconProps) {
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
      <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-42.34-61.66a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L120,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35A8,8,0,0,1,157.66,154.34Z"/>
    </svg>
  );
}
