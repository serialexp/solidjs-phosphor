import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDoorOpenIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMjE2SDIwOFY0MGExNiwxNiwwLDAsMC0xNi0xNkg2NEExNiwxNiwwLDAsMCw0OCw0MFYyMTZIMjRhOCw4LDAsMCwwLDAsMTZIMjMyYTgsOCwwLDAsMCwwLTE2Wm0tNDAsMEgxNzZWNDBoMTZaTTY0LDQwaDk2VjIxNkg2NFptODAsOTJhMTIsMTIsMCwxLDEtMTItMTJBMTIsMTIsMCwwLDEsMTQ0LDEzMloiLz48L3N2Zz4=)
 */
export function PhDoorOpenIcon(props: PhDoorOpenIconProps) {
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
      <path d="M232,216H208V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V216H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16Zm-40,0H176V40h16ZM64,40h96V216H64Zm80,92a12,12,0,1,1-12-12A12,12,0,0,1,144,132Z"/>
    </svg>
  );
}
