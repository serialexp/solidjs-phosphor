import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIuNDksMTY4LjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNywwbC00OC00OGExMiwxMiwwLDEsMSwxNy0xN0wxNjQsMTc5Vjc2SDMyYTEyLDEyLDAsMCwxLDAtMjRIMTc2YTEyLDEyLDAsMCwxLDEyLDEyVjE3OWwyNy41MS0yNy41MmExMiwxMiwwLDAsMSwxNywxN1oiLz48L3N2Zz4=)
 */
export function PhArrowElbowRightDownBoldIcon(props: PhArrowElbowRightDownBoldIconProps) {
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
      <path d="M232.49,168.49l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,1,1,17-17L164,179V76H32a12,12,0,0,1,0-24H176a12,12,0,0,1,12,12V179l27.51-27.52a12,12,0,0,1,17,17Z"/>
    </svg>
  );
}
