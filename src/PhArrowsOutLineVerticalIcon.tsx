import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsOutLineVerticalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLDAtMTZIMjE2QTgsOCwwLDAsMSwyMjQsMTI4Wk0xMDEuNjYsNTMuNjYsMTIwLDM1LjMxVjk2YTgsOCwwLDAsMCwxNiwwVjM1LjMxbDE4LjM0LDE4LjM1YTgsOCwwLDAsMCwxMS4zMi0xMS4zMmwtMzItMzJhOCw4LDAsMCwwLTExLjMyLDBsLTMyLDMyYTgsOCwwLDAsMCwxMS4zMiwxMS4zMlptNTIuNjgsMTQ4LjY4TDEzNiwyMjAuNjlWMTYwYTgsOCwwLDAsMC0xNiwwdjYwLjY5bC0xOC4zNC0xOC4zNWE4LDgsMCwwLDAtMTEuMzIsMTEuMzJsMzIsMzJhOCw4LDAsMCwwLDExLjMyLDBsMzItMzJhOCw4LDAsMCwwLTExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowsOutLineVerticalIcon(props: PhArrowsOutLineVerticalIconProps) {
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
      <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM101.66,53.66,120,35.31V96a8,8,0,0,0,16,0V35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32a8,8,0,0,0,11.32,11.32Zm52.68,148.68L136,220.69V160a8,8,0,0,0-16,0v60.69l-18.34-18.35a8,8,0,0,0-11.32,11.32l32,32a8,8,0,0,0,11.32,0l32-32a8,8,0,0,0-11.32-11.32Z"/>
    </svg>
  );
}
