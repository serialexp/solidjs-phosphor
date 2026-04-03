import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsNineIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Miw2MEExMiwxMiwwLDEsMSw2MCw0OCwxMiwxMiwwLDAsMSw3Miw2MFptNTYtMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTI4LDQ4Wm02OCwyNGExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxOTYsNzJaTTYwLDExNmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw2MCwxMTZabTY4LDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTI4LDExNlptNjgsMGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxOTYsMTE2Wk02MCwxODRhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsNjAsMTg0Wm02OCwwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCwxODRabTY4LDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTk2LDE4NFoiLz48L3N2Zz4=)
 */
export function PhDotsNineIcon(props: PhDotsNineIconProps) {
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
      <path d="M72,60A12,12,0,1,1,60,48,12,12,0,0,1,72,60Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,48Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,72ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,116Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,184a12,12,0,1,0,12,12A12,12,0,0,0,60,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,184Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,184Z"/>
    </svg>
  );
}
