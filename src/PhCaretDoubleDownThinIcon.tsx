import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretDoubleDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsMTMzLjE3YTQsNCwwLDAsMSwwLDUuNjZsLTgwLDgwYTQsNCwwLDAsMS01LjY2LDBsLTgwLTgwYTQsNCwwLDAsMSw1LjY2LTUuNjZMMTI4LDIxMC4zNGw3Ny4xNy03Ny4xN0E0LDQsMCwwLDEsMjEwLjgzLDEzMy4xN1ptLTg1LjY2LDUuNjZhNCw0LDAsMCwwLDUuNjYsMGw4MC04MGE0LDQsMCwxLDAtNS42Ni01LjY2TDEyOCwxMzAuMzQsNTAuODMsNTMuMTdhNCw0LDAsMCwwLTUuNjYsNS42NloiLz48L3N2Zz4=)
 */
export function PhCaretDoubleDownThinIcon(props: PhCaretDoubleDownThinIconProps) {
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
      <path d="M210.83,133.17a4,4,0,0,1,0,5.66l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,210.34l77.17-77.17A4,4,0,0,1,210.83,133.17Zm-85.66,5.66a4,4,0,0,0,5.66,0l80-80a4,4,0,1,0-5.66-5.66L128,130.34,50.83,53.17a4,4,0,0,0-5.66,5.66Z"/>
    </svg>
  );
}
