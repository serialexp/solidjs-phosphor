import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumpadThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik03Niw0OEExMiwxMiwwLDEsMSw2NCwzNiwxMiwxMiwwLDAsMSw3Niw0OFptNTItMTJhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTI4LDM2Wm02NCwyNGExMiwxMiwwLDEsMC0xMi0xMkExMiwxMiwwLDAsMCwxOTIsNjBaTTY0LDkyYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDY0LDkyWm02NCwwYTEyLDEyLDAsMSwwLDEyLDEyQTEyLDEyLDAsMCwwLDEyOCw5MlptNjQsMGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxOTIsOTJaTTY0LDE0OGExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCw2NCwxNDhabTY0LDBhMTIsMTIsMCwxLDAsMTIsMTJBMTIsMTIsMCwwLDAsMTI4LDE0OFptMCw1NmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxMjgsMjA0Wm02NC01NmExMiwxMiwwLDEsMCwxMiwxMkExMiwxMiwwLDAsMCwxOTIsMTQ4WiIvPjwvc3ZnPg==)
 */
export function PhNumpadThinIcon(props: PhNumpadThinIconProps) {
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
      <path d="M76,48A12,12,0,1,1,64,36,12,12,0,0,1,76,48Zm52-12a12,12,0,1,0,12,12A12,12,0,0,0,128,36Zm64,24a12,12,0,1,0-12-12A12,12,0,0,0,192,60ZM64,92a12,12,0,1,0,12,12A12,12,0,0,0,64,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,92Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,192,92ZM64,148a12,12,0,1,0,12,12A12,12,0,0,0,64,148Zm64,0a12,12,0,1,0,12,12A12,12,0,0,0,128,148Zm0,56a12,12,0,1,0,12,12A12,12,0,0,0,128,204Zm64-56a12,12,0,1,0,12,12A12,12,0,0,0,192,148Z"/>
    </svg>
  );
}
