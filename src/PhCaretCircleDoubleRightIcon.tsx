import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleRightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTE5MC4yMywxOTAuMjNhODgsODgsMCwxLDEsMC0xMjQuNDZBODguMTEsODguMTEsMCwwLDEsMTkwLjIzLDE5MC4yM1ptLTY0LjU3LTY3Ljg5YTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTA4LjY5LDEyOCw4Mi4zNCwxMDEuNjZBOCw4LDAsMCwxLDkzLjY2LDkwLjM0Wm01NiwwYTgsOCwwLDAsMSwwLDExLjMybC0zMiwzMmE4LDgsMCwwLDEtMTEuMzItMTEuMzJMMTY0LjY5LDEyOGwtMjYuMzUtMjYuMzRhOCw4LDAsMCwxLDExLjMyLTExLjMyWiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleDoubleRightIcon(props: PhCaretCircleDoubleRightIconProps) {
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
      <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-64.57-67.89a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L108.69,128,82.34,101.66A8,8,0,0,1,93.66,90.34Zm56,0a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L164.69,128l-26.35-26.34a8,8,0,0,1,11.32-11.32Z"/>
    </svg>
  );
}
