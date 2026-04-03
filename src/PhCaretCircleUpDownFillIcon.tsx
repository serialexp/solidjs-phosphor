import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleUpDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsMjRBMTA0LDEwNCwwLDEsMCwyMzIsMTI4LDEwNC4xMSwxMDQuMTEsMCwwLDAsMTI4LDI0Wm0zNy42NiwxMzMuNjYtMzIsMzJhOCw4LDAsMCwxLTExLjMyLDBsLTMyLTMyYTgsOCwwLDAsMSwxMS4zMi0xMS4zMkwxMjgsMTcyLjY5bDI2LjM0LTI2LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMlptMC00OGE4LDgsMCwwLDEtMTEuMzIsMEwxMjgsODMuMzFsLTI2LjM0LDI2LjM1QTgsOCwwLDAsMSw5MC4zNCw5OC4zNGwzMi0zMmE4LDgsMCwwLDEsMTEuMzIsMGwzMiwzMkE4LDgsMCwwLDEsMTY1LjY2LDEwOS42NloiLz48L3N2Zz4=)
 */
export function PhCaretCircleUpDownFillIcon(props: PhCaretCircleUpDownFillIconProps) {
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
      <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,133.66-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,0,1,11.32-11.32L128,172.69l26.34-26.35a8,8,0,0,1,11.32,11.32Zm0-48a8,8,0,0,1-11.32,0L128,83.31l-26.34,26.35A8,8,0,0,1,90.34,98.34l32-32a8,8,0,0,1,11.32,0l32,32A8,8,0,0,1,165.66,109.66Z"/>
    </svg>
  );
}
