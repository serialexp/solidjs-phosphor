import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextIndentIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTI4YTgsOCwwLDAsMS04LDhIMTEyYTgsOCwwLDAsMSwwLTE2SDIxNkE4LDgsMCwwLDEsMjI0LDEyOFpNMTEyLDcySDIxNmE4LDgsMCwwLDAsMC0xNkgxMTJhOCw4LDAsMCwwLDAsMTZaTTIxNiwxODRINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2Wk0zNC4zNCwxNDEuNjZhOCw4LDAsMCwwLDExLjMyLDBsNDAtNDBhOCw4LDAsMCwwLDAtMTEuMzJsLTQwLTQwQTgsOCwwLDAsMCwzNC4zNCw2MS42Nkw2OC42OSw5NiwzNC4zNCwxMzAuMzRBOCw4LDAsMCwwLDM0LjM0LDE0MS42NloiLz48L3N2Zz4=)
 */
export function PhTextIndentIcon(props: PhTextIndentIconProps) {
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
      <path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM34.34,141.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,34.34,61.66L68.69,96,34.34,130.34A8,8,0,0,0,34.34,141.66Z"/>
    </svg>
  );
}
