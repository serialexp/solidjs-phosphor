import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderMaleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsMjhIMTY4YTEyLDEyLDAsMCwwLDAsMjRoMTlMMTU0LjI4LDg0Ljc0YTg0LDg0LDAsMSwwLDE3LDE3TDIwNCw2OVY4OGExMiwxMiwwLDAsMCwyNCwwVjQwQTEyLDEyLDAsMCwwLDIxNiwyOFpNMTQ2LjQxLDE5NC40NmE2MCw2MCwwLDEsMSwwLTg0Ljg3QTYwLjEsNjAuMSwwLDAsMSwxNDYuNDEsMTk0LjQ2WiIvPjwvc3ZnPg==)
 */
export function PhGenderMaleBoldIcon(props: PhGenderMaleBoldIconProps) {
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
      <path d="M216,28H168a12,12,0,0,0,0,24h19L154.28,84.74a84,84,0,1,0,17,17L204,69V88a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28ZM146.41,194.46a60,60,0,1,1,0-84.87A60.1,60.1,0,0,1,146.41,194.46Z"/>
    </svg>
  );
}
