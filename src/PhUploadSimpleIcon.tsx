import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUploadSimpleIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsMTQ0djY0YTgsOCwwLDAsMS04LDhINDBhOCw4LDAsMCwxLTgtOFYxNDRhOCw4LDAsMCwxLDE2LDB2NTZIMjA4VjE0NGE4LDgsMCwwLDEsMTYsMFpNOTMuNjYsNzcuNjYsMTIwLDUxLjMxVjE0NGE4LDgsMCwwLDAsMTYsMFY1MS4zMWwyNi4zNCwyNi4zNWE4LDgsMCwwLDAsMTEuMzItMTEuMzJsLTQwLTQwYTgsOCwwLDAsMC0xMS4zMiwwbC00MCw0MEE4LDgsMCwwLDAsOTMuNjYsNzcuNjZaIi8+PC9zdmc+)
 */
export function PhUploadSimpleIcon(props: PhUploadSimpleIconProps) {
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
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0ZM93.66,77.66,120,51.31V144a8,8,0,0,0,16,0V51.31l26.34,26.35a8,8,0,0,0,11.32-11.32l-40-40a8,8,0,0,0-11.32,0l-40,40A8,8,0,0,0,93.66,77.66Z"/>
    </svg>
  );
}
