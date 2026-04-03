import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTJIODBBMjgsMjgsMCwwLDAsNTIsNDBWMjE2YTI4LDI4LDAsMCwwLDI4LDI4aDk2YTI4LDI4LDAsMCwwLDI4LTI4VjQwQTI4LDI4LDAsMCwwLDE3NiwxMlpNNzYsNzZIMTgwVjE4MEg3NlptNC00MGg5NmE0LDQsMCwwLDEsNCw0VjUySDc2VjQwQTQsNCwwLDAsMSw4MCwzNlptOTYsMTg0SDgwYTQsNCwwLDAsMS00LTRWMjA0SDE4MHYxMkE0LDQsMCwwLDEsMTc2LDIyMFoiLz48L3N2Zz4=)
 */
export function PhDeviceMobileBoldIcon(props: PhDeviceMobileBoldIconProps) {
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
      <path d="M176,12H80A28,28,0,0,0,52,40V216a28,28,0,0,0,28,28h96a28,28,0,0,0,28-28V40A28,28,0,0,0,176,12ZM76,76H180V180H76Zm4-40h96a4,4,0,0,1,4,4V52H76V40A4,4,0,0,1,80,36Zm96,184H80a4,4,0,0,1-4-4V204H180v12A4,4,0,0,1,176,220Z"/>
    </svg>
  );
}
