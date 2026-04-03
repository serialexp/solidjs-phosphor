import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCursorTextIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMjA4YTgsOCwwLDAsMS04LDhIMTYwYTQwLDQwLDAsMCwxLTMyLTE2LDQwLDQwLDAsMCwxLTMyLDE2SDgwYTgsOCwwLDAsMSwwLTE2SDk2YTI0LDI0LDAsMCwwLDI0LTI0VjEzNkgxMDRhOCw4LDAsMCwxLDAtMTZoMTZWODBBMjQsMjQsMCwwLDAsOTYsNTZIODBhOCw4LDAsMCwxLDAtMTZIOTZhNDAsNDAsMCwwLDEsMzIsMTYsNDAsNDAsMCwwLDEsMzItMTZoMTZhOCw4LDAsMCwxLDAsMTZIMTYwYTI0LDI0LDAsMCwwLTI0LDI0djQwaDE2YTgsOCwwLDAsMSwwLDE2SDEzNnY0MGEyNCwyNCwwLDAsMCwyNCwyNGgxNkE4LDgsMCwwLDEsMTg0LDIwOFoiLz48L3N2Zz4=)
 */
export function PhCursorTextIcon(props: PhCursorTextIconProps) {
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
      <path d="M184,208a8,8,0,0,1-8,8H160a40,40,0,0,1-32-16,40,40,0,0,1-32,16H80a8,8,0,0,1,0-16H96a24,24,0,0,0,24-24V136H104a8,8,0,0,1,0-16h16V80A24,24,0,0,0,96,56H80a8,8,0,0,1,0-16H96a40,40,0,0,1,32,16,40,40,0,0,1,32-16h16a8,8,0,0,1,0,16H160a24,24,0,0,0-24,24v40h16a8,8,0,0,1,0,16H136v40a24,24,0,0,0,24,24h16A8,8,0,0,1,184,208Z"/>
    </svg>
  );
}
