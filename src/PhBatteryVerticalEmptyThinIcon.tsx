import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBatteryVerticalEmptyThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Miw4YTQsNCwwLDAsMSw0LTRoNjRhNCw0LDAsMCwxLDAsOEg5NkE0LDQsMCwwLDEsOTIsOFpNMTk2LDU2VjIyNGEyMCwyMCwwLDAsMS0yMCwyMEg4MGEyMCwyMCwwLDAsMS0yMC0yMFY1NkEyMCwyMCwwLDAsMSw4MCwzNmg5NkEyMCwyMCwwLDAsMSwxOTYsNTZabS04LDBhMTIsMTIsMCwwLDAtMTItMTJIODBBMTIsMTIsMCwwLDAsNjgsNTZWMjI0YTEyLDEyLDAsMCwwLDEyLDEyaDk2YTEyLDEyLDAsMCwwLDEyLTEyWiIvPjwvc3ZnPg==)
 */
export function PhBatteryVerticalEmptyThinIcon(props: PhBatteryVerticalEmptyThinIconProps) {
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
      <path d="M92,8a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,8ZM196,56V224a20,20,0,0,1-20,20H80a20,20,0,0,1-20-20V56A20,20,0,0,1,80,36h96A20,20,0,0,1,196,56Zm-8,0a12,12,0,0,0-12-12H80A12,12,0,0,0,68,56V224a12,12,0,0,0,12,12h96a12,12,0,0,0,12-12Z"/>
    </svg>
  );
}
