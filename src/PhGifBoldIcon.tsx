import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGifBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsNzJWMTg0YTEyLDEyLDAsMCwxLTI0LDBWNzJhMTIsMTIsMCwwLDEsMjQsMFptODQsMTJhMTIsMTIsMCwwLDAsMC0yNEgxNzZhMTIsMTIsMCwwLDAtMTIsMTJWMTg0YTEyLDEyLDAsMCwwLDI0LDBWMTQwaDM2YTEyLDEyLDAsMCwwLDAtMjRIMTg4Vjg0Wk05NiwxMTZINzJhMTIsMTIsMCwwLDAsMCwyNEg4NHYxMmEyMCwyMCwwLDAsMS00MCwwVjEwNEEyMCwyMCwwLDAsMSw2NCw4NGM5LjQyLDAsMTguMTgsNi40NSwyMC4zOCwxNWExMiwxMiwwLDEsMCwyMy4yNC02QzEwMi43LDczLjg4LDg0LjM1LDYwLDY0LDYwYTQ0LjA1LDQ0LjA1LDAsMCwwLTQ0LDQ0djQ4YTQ0LDQ0LDAsMCwwLDg4LDBWMTI4QTEyLDEyLDAsMCwwLDk2LDExNloiLz48L3N2Zz4=)
 */
export function PhGifBoldIcon(props: PhGifBoldIconProps) {
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
      <path d="M148,72V184a12,12,0,0,1-24,0V72a12,12,0,0,1,24,0Zm84,12a12,12,0,0,0,0-24H176a12,12,0,0,0-12,12V184a12,12,0,0,0,24,0V140h36a12,12,0,0,0,0-24H188V84ZM96,116H72a12,12,0,0,0,0,24H84v12a20,20,0,0,1-40,0V104A20,20,0,0,1,64,84c9.42,0,18.18,6.45,20.38,15a12,12,0,1,0,23.24-6C102.7,73.88,84.35,60,64,60a44.05,44.05,0,0,0-44,44v48a44,44,0,0,0,88,0V128A12,12,0,0,0,96,116Z"/>
    </svg>
  );
}
