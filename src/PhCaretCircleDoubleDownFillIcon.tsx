import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTcsNTQuNDNBMTA0LjE1LDEwNC4xNSwwLDEsMCwyMzIsMTI4LDEwNC4xNywxMDQuMTcsMCwwLDAsMjAxLjU3LDU0LjQzWm0tMzUuOSw5NS4yNC0zMiwzMmE4LDgsMCwwLDEtMTEuMzIsMGwtMzItMzJhOCw4LDAsMSwxLDExLjMyLTExLjMyTDEyOCwxNjQuNzFsMjYuMzUtMjYuMzZhOCw4LDAsMSwxLDExLjMyLDExLjMyWm0wLTU2LTMyLDMyYTgsOCwwLDAsMS0xMS4zMiwwbC0zMi0zMmE4LDgsMCwxLDEsMTEuMzItMTEuMzJMMTI4LDEwOC42OGwyNi4zNS0yNi4zNmE4LDgsMCwxLDEsMTEuMzIsMTEuMzJaIi8+PC9zdmc+)
 */
export function PhCaretCircleDoubleDownFillIcon(props: PhCaretCircleDoubleDownFillIconProps) {
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
      <path d="M201.57,54.43A104.15,104.15,0,1,0,232,128,104.17,104.17,0,0,0,201.57,54.43Zm-35.9,95.24-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71l26.35-26.36a8,8,0,1,1,11.32,11.32Zm0-56-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68l26.35-26.36a8,8,0,1,1,11.32,11.32Z"/>
    </svg>
  );
}
