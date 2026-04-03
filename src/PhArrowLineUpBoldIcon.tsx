import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDguNDksMTQzLjUxYTEyLDEyLDAsMCwxLTE3LDE3TDE0MCwxMDlWMjI0YTEyLDEyLDAsMCwxLTI0LDBWMTA5TDY0LjQ5LDE2MC40OWExMiwxMiwwLDAsMS0xNy0xN2w3Mi03MmExMiwxMiwwLDAsMSwxNywwWk0yMTYsMjhINDBhMTIsMTIsMCwwLDAsMCwyNEgyMTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhArrowLineUpBoldIcon(props: PhArrowLineUpBoldIconProps) {
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
      <path d="M208.49,143.51a12,12,0,0,1-17,17L140,109V224a12,12,0,0,1-24,0V109L64.49,160.49a12,12,0,0,1-17-17l72-72a12,12,0,0,1,17,0ZM216,28H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
