import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhUserSoundFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTguMTMsMjAyLjg1QTgsOCwwLDAsMSwxOTIsMjE2SDI0YTgsOCwwLDAsMS02LjEyLTEzLjE1YzE0Ljk0LTE3Ljc4LDMzLjUyLTMwLjQxLDU0LjE3LTM3LjE3YTY4LDY4LDAsMSwxLDcxLjksMEMxNjQuNiwxNzIuNDQsMTgzLjE4LDE4NS4wNywxOTguMTMsMjAyLjg1Wk0xOTYuODYsNjEuMzlhOCw4LDAsMCwwLTQuMjIsMTAuNSw5Mi4yNiw5Mi4yNiwwLDAsMSwwLDcyLjIyLDgsOCwwLDEsMCwxNC43Miw2LjI5LDEwOC4zNiwxMDguMzYsMCwwLDAsMC04NC44QTgsOCwwLDAsMCwxOTYuODYsNjEuMzlabTM5Ljg1LTguNTRhOCw4LDAsMSwwLTE0LjcsNi4zLDEyNC40MywxMjQuNDMsMCwwLDEsMCw5Ny43LDgsOCwwLDEsMCwxNC43LDYuMywxNDAuMzQsMTQwLjM0LDAsMCwwLDAtMTEwLjNaIi8+PC9zdmc+)
 */
export function PhUserSoundFillIcon(props: PhUserSoundFillIconProps) {
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
      <path d="M198.13,202.85A8,8,0,0,1,192,216H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,172.44,183.18,185.07,198.13,202.85ZM196.86,61.39a8,8,0,0,0-4.22,10.5,92.26,92.26,0,0,1,0,72.22,8,8,0,1,0,14.72,6.29,108.36,108.36,0,0,0,0-84.8A8,8,0,0,0,196.86,61.39Zm39.85-8.54a8,8,0,1,0-14.7,6.3,124.43,124.43,0,0,1,0,97.7,8,8,0,1,0,14.7,6.3,140.34,140.34,0,0,0,0-110.3Z"/>
    </svg>
  );
}
