import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNTQsNTQuNDZBMTA0LDEwNCwwLDAsMCw1NC40NiwyMDEuNTQsMTA0LDEwNCwwLDAsMCwyMDEuNTQsNTQuNDZaTTE5MC4yMywxOTAuMjNhODgsODgsMCwxLDEsMC0xMjQuNDZBODguMTEsODguMTEsMCwwLDEsMTkwLjIzLDE5MC4yM1ptLTE2LjU3LTg4LjU3TDE0Ny4zMSwxMjhsMjYuMzUsMjYuMzRhOCw4LDAsMCwxLTExLjMyLDExLjMybC0zMi0zMmE4LDgsMCwwLDEsMC0xMS4zMmwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMTEuMzJabS01NiwwTDkxLjMxLDEyOGwyNi4zNSwyNi4zNGE4LDgsMCwwLDEtMTEuMzIsMTEuMzJsLTMyLTMyYTgsOCwwLDAsMSwwLTExLjMybDMyLTMyYTgsOCwwLDAsMSwxMS4zMiwxMS4zMloiLz48L3N2Zz4=)
 */
export function PhCaretCircleDoubleLeftIcon(props: PhCaretCircleDoubleLeftIconProps) {
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
      <path d="M201.54,54.46A104,104,0,0,0,54.46,201.54,104,104,0,0,0,201.54,54.46ZM190.23,190.23a88,88,0,1,1,0-124.46A88.11,88.11,0,0,1,190.23,190.23Zm-16.57-88.57L147.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32Zm-56,0L91.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32Z"/>
    </svg>
  );
}
