import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyRubFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsMTA0YTI0LDI0LDAsMCwxLTI0LDI0SDExMlY4MGgzMkEyNCwyNCwwLDAsMSwxNjgsMTA0Wm02NCwyNEExMDQsMTA0LDAsMSwxLDEyOCwyNCwxMDQuMTEsMTA0LjExLDAsMCwxLDIzMiwxMjhabS00OC0yNGE0MCw0MCwwLDAsMC00MC00MEgxMDRhOCw4LDAsMCwwLTgsOHY1Nkg4OGE4LDgsMCwwLDAsMCwxNmg4djE2SDg4YTgsOCwwLDAsMCwwLDE2aDh2MTZhOCw4LDAsMCwwLDE2LDBWMTc2aDQwYTgsOCwwLDAsMCwwLTE2SDExMlYxNDRoMzJBNDAsNDAsMCwwLDAsMTg0LDEwNFoiLz48L3N2Zz4=)
 */
export function PhCurrencyRubFillIcon(props: PhCurrencyRubFillIconProps) {
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
      <path d="M168,104a24,24,0,0,1-24,24H112V80h32A24,24,0,0,1,168,104Zm64,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48-24a40,40,0,0,0-40-40H104a8,8,0,0,0-8,8v56H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16a8,8,0,0,0,16,0V176h40a8,8,0,0,0,0-16H112V144h32A40,40,0,0,0,184,104Z"/>
    </svg>
  );
}
