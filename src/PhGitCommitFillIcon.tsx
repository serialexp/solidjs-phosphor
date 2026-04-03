import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitCommitFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTYsMTI4YTgsOCwwLDAsMS04LDhIMTgzLjQyYTU2LDU2LDAsMCwxLTExMC44NCwwSDhhOCw4LDAsMCwxLDAtMTZINzIuNThhNTYsNTYsMCwwLDEsMTEwLjg0LDBIMjQ4QTgsOCwwLDAsMSwyNTYsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhGitCommitFillIcon(props: PhGitCommitFillIconProps) {
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
      <path d="M256,128a8,8,0,0,1-8,8H183.42a56,56,0,0,1-110.84,0H8a8,8,0,0,1,0-16H72.58a56,56,0,0,1,110.84,0H248A8,8,0,0,1,256,128Z"/>
    </svg>
  );
}
