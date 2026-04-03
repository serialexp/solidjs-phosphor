import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTableBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDRIMzJBMTIsMTIsMCwwLDAsMjAsNTZWMTkyYTIwLDIwLDAsMCwwLDIwLDIwSDIxNmEyMCwyMCwwLDAsMCwyMC0yMFY1NkExMiwxMiwwLDAsMCwyMjQsNDRaTTQ0LDExNkg3NnYyNEg0NFptNTYsMEgyMTJ2MjRIMTAwWk0yMTIsNjhWOTJINDRWNjhaTTQ0LDE2NEg3NnYyNEg0NFptNTYsMjRWMTY0SDIxMnYyNFoiLz48L3N2Zz4=)
 */
export function PhTableBoldIcon(props: PhTableBoldIconProps) {
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
      <path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM44,116H76v24H44Zm56,0H212v24H100ZM212,68V92H44V68ZM44,164H76v24H44Zm56,24V164H212v24Z"/>
    </svg>
  );
}
