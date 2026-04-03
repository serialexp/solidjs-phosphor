import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhVideoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjA4YTgsOCwwLDAsMS04LDhIMzJhOCw4LDAsMCwxLDAtMTZIMjI0QTgsOCwwLDAsMSwyMzIsMjA4Wm0wLTE1MlYxNjhhMTYsMTYsMCwwLDEtMTYsMTZINDBhMTYsMTYsMCwwLDEtMTYtMTZWNTZBMTYsMTYsMCwwLDEsNDAsNDBIMjE2QTE2LDE2LDAsMCwxLDIzMiw1NlptLTY4LDU2YTgsOCwwLDAsMC0zLjQxLTYuNTVsLTQwLTI4QTgsOCwwLDAsMCwxMDgsODR2NTZhOCw4LDAsMCwwLDEyLjU5LDYuNTVsNDAtMjhBOCw4LDAsMCwwLDE2NCwxMTJaIi8+PC9zdmc+)
 */
export function PhVideoFillIcon(props: PhVideoFillIconProps) {
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
      <path d="M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H224A8,8,0,0,1,232,208Zm0-152V168a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-68,56a8,8,0,0,0-3.41-6.55l-40-28A8,8,0,0,0,108,84v56a8,8,0,0,0,12.59,6.55l40-28A8,8,0,0,0,164,112Z"/>
    </svg>
  );
}
