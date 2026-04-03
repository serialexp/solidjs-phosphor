import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBriefcaseThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsMTEyYTQsNCwwLDAsMSw0LTRoMzJhNCw0LDAsMCwxLDAsOEgxMTJBNCw0LDAsMCwxLDEwOCwxMTJaTTIyOCw3MlYyMDBhMTIsMTIsMCwwLDEtMTIsMTJINDBhMTIsMTIsMCwwLDEtMTItMTJWNzJBMTIsMTIsMCwwLDEsNDAsNjBIODRWNDhhMjAsMjAsMCwwLDEsMjAtMjBoNDhhMjAsMjAsMCwwLDEsMjAsMjBWNjBoNDRBMTIsMTIsMCwwLDEsMjI4LDcyWk05Miw2MGg3MlY0OGExMiwxMiwwLDAsMC0xMi0xMkgxMDRBMTIsMTIsMCwwLDAsOTIsNDhaTTM2LDcydjQ0YTE4OCwxODgsMCwwLDAsOTIsMjQsMTg4LDE4OCwwLDAsMCw5Mi0yNFY3MmE0LDQsMCwwLDAtNC00SDQwQTQsNCwwLDAsMCwzNiw3MlpNMjIwLDIwMFYxMjUuMUExOTYuMDYsMTk2LjA2LDAsMCwxLDEyOCwxNDhhMTk2LDE5NiwwLDAsMS05Mi0yMi45VjIwMGE0LDQsMCwwLDAsNCw0SDIxNkE0LDQsMCwwLDAsMjIwLDIwMFoiLz48L3N2Zz4=)
 */
export function PhBriefcaseThinIcon(props: PhBriefcaseThinIconProps) {
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
      <path d="M108,112a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H112A4,4,0,0,1,108,112ZM228,72V200a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V72A12,12,0,0,1,40,60H84V48a20,20,0,0,1,20-20h48a20,20,0,0,1,20,20V60h44A12,12,0,0,1,228,72ZM92,60h72V48a12,12,0,0,0-12-12H104A12,12,0,0,0,92,48ZM36,72v44a188,188,0,0,0,92,24,188,188,0,0,0,92-24V72a4,4,0,0,0-4-4H40A4,4,0,0,0,36,72ZM220,200V125.1A196.06,196.06,0,0,1,128,148a196,196,0,0,1-92-22.9V200a4,4,0,0,0,4,4H216A4,4,0,0,0,220,200Z"/>
    </svg>
  );
}
