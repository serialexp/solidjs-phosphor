import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBagFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjRIMTc2YTQ4LDQ4LDAsMCwwLTk2LDBINDBBMTYsMTYsMCwwLDAsMjQsODBWMjAwYTE2LDE2LDAsMCwwLDE2LDE2SDIxNmExNiwxNiwwLDAsMCwxNi0xNlY4MEExNiwxNiwwLDAsMCwyMTYsNjRaTTk2LDEwNGE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFptMzItNzJhMzIsMzIsMCwwLDEsMzIsMzJIOTZBMzIsMzIsMCwwLDEsMTI4LDMyWm00OCw3MmE4LDgsMCwwLDEtMTYsMFY4OGE4LDgsMCwwLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhBagFillIcon(props: PhBagFillIconProps) {
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
      <path d="M216,64H176a48,48,0,0,0-96,0H40A16,16,0,0,0,24,80V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V80A16,16,0,0,0,216,64ZM96,104a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm32-72a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm48,72a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"/>
    </svg>
  );
}
