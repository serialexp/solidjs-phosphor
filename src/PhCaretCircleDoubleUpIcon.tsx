import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTE5MC4yMywxOTAuMjNhODgsODgsMCwxLDEsMC0xMjQuNDZBODguMTEsODguMTEsMCwwLDEsMTkwLjIzLDE5MC4yM1ptLTI0LjU3LTI3Ljg5YTgsOCwwLDAsMS0xMS4zMiwxMS4zMkwxMjgsMTQ3LjMxbC0yNi4zNCwyNi4zNWE4LDgsMCwwLDEtMTEuMzItMTEuMzJsMzItMzJhOCw4LDAsMCwxLDExLjMyLDBabTAtNTZhOCw4LDAsMCwxLTExLjMyLDExLjMyTDEyOCw5MS4zMWwtMjYuMzQsMjYuMzVhOCw4LDAsMCwxLTExLjMyLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwwWiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleDoubleUpIcon(props: PhCaretCircleDoubleUpIconProps) {
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
      <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-24.57-27.89a8,8,0,0,1-11.32,11.32L128,147.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Zm0-56a8,8,0,0,1-11.32,11.32L128,91.31l-26.34,26.35a8,8,0,0,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0Z"/>
    </svg>
  );
}
