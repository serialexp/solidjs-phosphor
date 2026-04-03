import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYuNDksMTExLjUxbC04MC04MGExMiwxMiwwLDAsMC0xNywwbC04MCw4MEExMiwxMiwwLDAsMCwzNiwxMjB2OTZhNCw0LDAsMCwwLDQsNEgyMTZhNCw0LDAsMCwwLDQtNFYxMjBBMTIsMTIsMCwwLDAsMjE2LjQ5LDExMS41MVpNMjEyLDIxMkg0NFYxMjBhNCw0LDAsMCwxLDEuMTctMi44M2w4MC04MGE0LDQsMCwwLDEsNS42NiwwbDgwLDgwQTQsNCwwLDAsMSwyMTIsMTIwWiIvPjwvc3ZnPg==)
 */
export function PhHouseSimpleThinIcon(props: PhHouseSimpleThinIconProps) {
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
      <path d="M216.49,111.51l-80-80a12,12,0,0,0-17,0l-80,80A12,12,0,0,0,36,120v96a4,4,0,0,0,4,4H216a4,4,0,0,0,4-4V120A12,12,0,0,0,216.49,111.51ZM212,212H44V120a4,4,0,0,1,1.17-2.83l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,212,120Z"/>
    </svg>
  );
}
