import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowDownRightBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQuNDksMTg0LjQ5bC00OCw0OGExMiwxMiwwLDAsMS0xNy0xN0wxODcsMTg4SDcyYTEyLDEyLDAsMCwxLTEyLTEyVjMyYTEyLDEyLDAsMCwxLDI0LDBWMTY0SDE4N2wtMjcuNTItMjcuNTFhMTIsMTIsMCwxLDEsMTctMTdsNDgsNDhBMTIsMTIsMCwwLDEsMjI0LjQ5LDE4NC40OVoiLz48L3N2Zz4=)
 */
export function PhArrowElbowDownRightBoldIcon(props: PhArrowElbowDownRightBoldIconProps) {
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
      <path d="M224.49,184.49l-48,48a12,12,0,0,1-17-17L187,188H72a12,12,0,0,1-12-12V32a12,12,0,0,1,24,0V164H187l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,224.49,184.49Z"/>
    </svg>
  );
}
