import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCursorTextThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsMjA4YTQsNCwwLDAsMS00LDRIMTYwYTM2LDM2LDAsMCwxLTMyLTE5LjU0QTM2LDM2LDAsMCwxLDk2LDIxMkg4MGE0LDQsMCwwLDEsMC04SDk2YTI4LDI4LDAsMCwwLDI4LTI4VjEzMkgxMDRhNCw0LDAsMCwxLDAtOGgyMFY4MEEyOCwyOCwwLDAsMCw5Niw1Mkg4MGE0LDQsMCwwLDEsMC04SDk2YTM2LDM2LDAsMCwxLDMyLDE5LjU0QTM2LDM2LDAsMCwxLDE2MCw0NGgxNmE0LDQsMCwwLDEsMCw4SDE2MGEyOCwyOCwwLDAsMC0yOCwyOHY0NGgyMGE0LDQsMCwwLDEsMCw4SDEzMnY0NGEyOCwyOCwwLDAsMCwyOCwyOGgxNkE0LDQsMCwwLDEsMTgwLDIwOFoiLz48L3N2Zz4=)
 */
export function PhCursorTextThinIcon(props: PhCursorTextThinIconProps) {
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
      <path d="M180,208a4,4,0,0,1-4,4H160a36,36,0,0,1-32-19.54A36,36,0,0,1,96,212H80a4,4,0,0,1,0-8H96a28,28,0,0,0,28-28V132H104a4,4,0,0,1,0-8h20V80A28,28,0,0,0,96,52H80a4,4,0,0,1,0-8H96a36,36,0,0,1,32,19.54A36,36,0,0,1,160,44h16a4,4,0,0,1,0,8H160a28,28,0,0,0-28,28v44h20a4,4,0,0,1,0,8H132v44a28,28,0,0,0,28,28h16A4,4,0,0,1,180,208Z"/>
    </svg>
  );
}
