import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCheckCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYuNDksOTUuNTFhMTIsMTIsMCwwLDEsMCwxN2wtNTYsNTZhMTIsMTIsMCwwLDEtMTcsMGwtMjQtMjRhMTIsMTIsMCwxLDEsMTctMTdMMTEyLDE0M2w0Ny41MS00Ny41MkExMiwxMiwwLDAsMSwxNzYuNDksOTUuNTFaTTIzNiwxMjhBMTA4LDEwOCwwLDEsMSwxMjgsMjAsMTA4LjEyLDEwOC4xMiwwLDAsMSwyMzYsMTI4Wm0tMjQsMGE4NCw4NCwwLDEsMC04NCw4NEE4NC4wOSw4NC4wOSwwLDAsMCwyMTIsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhCheckCircleBoldIcon(props: PhCheckCircleBoldIconProps) {
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
      <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>
    </svg>
  );
}
