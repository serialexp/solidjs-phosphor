import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLockThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsODRIMTcyVjU2YTQ0LDQ0LDAsMCwwLTg4LDBWODRINDhBMTIsMTIsMCwwLDAsMzYsOTZWMjA4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlY5NkExMiwxMiwwLDAsMCwyMDgsODRaTTkyLDU2YTM2LDM2LDAsMCwxLDcyLDBWODRIOTJaTTIxMiwyMDhhNCw0LDAsMCwxLTQsNEg0OGE0LDQsMCwwLDEtNC00Vjk2YTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRabS03Ni01NmE4LDgsMCwxLDEtOC04QTgsOCwwLDAsMSwxMzYsMTUyWiIvPjwvc3ZnPg==)
 */
export function PhLockThinIcon(props: PhLockThinIconProps) {
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
      <path d="M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"/>
    </svg>
  );
}
