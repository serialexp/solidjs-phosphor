import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhImageThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDRINDBBMTIsMTIsMCwwLDAsMjgsNTZWMjAwYTEyLDEyLDAsMCwwLDEyLDEySDIxNmExMiwxMiwwLDAsMCwxMi0xMlY1NkExMiwxMiwwLDAsMCwyMTYsNDRaTTQwLDUySDIxNmE0LDQsMCwwLDEsNCw0VjE2OC40bC0zMi44OS0zMi44OWExMiwxMiwwLDAsMC0xNywwbC0yMi44MywyMi44My00Ni44Mi00Ni44M2ExMiwxMiwwLDAsMC0xNywwTDM2LDE1OVY1NkE0LDQsMCwwLDEsNDAsNTJaTTM2LDIwMFYxNzAuMzRsNTMuMTctNTMuMTdhNCw0LDAsMCwxLDUuNjYsMEwxODEuNjYsMjA0SDQwQTQsNCwwLDAsMSwzNiwyMDBabTE4MCw0SDE5M2wtNDAtNDAsMjIuODMtMjIuODNhNCw0LDAsMCwxLDUuNjYsMEwyMjAsMTc5LjcxVjIwMEE0LDQsMCwwLDEsMjE2LDIwNFpNMTQ4LDEwMGE4LDgsMCwxLDEsOCw4QTgsOCwwLDAsMSwxNDgsMTAwWiIvPjwvc3ZnPg==)
 */
export function PhImageThinIcon(props: PhImageThinIconProps) {
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
      <path d="M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"/>
    </svg>
  );
}
