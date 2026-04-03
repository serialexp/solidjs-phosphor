import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhJoystickThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMTQ4SDEzMlY5MS43N2EzNiwzNiwwLDEsMC04LDBWMTQ4SDQ4YTEyLDEyLDAsMCwwLTEyLDEydjQ4YTEyLDEyLDAsMCwwLDEyLDEySDIwOGExMiwxMiwwLDAsMCwxMi0xMlYxNjBBMTIsMTIsMCwwLDAsMjA4LDE0OFpNMTAwLDU2YTI4LDI4LDAsMSwxLDI4LDI4QTI4LDI4LDAsMCwxLDEwMCw1NlpNMjEyLDIwOGE0LDQsMCwwLDEtNCw0SDQ4YTQsNCwwLDAsMS00LTRWMTYwYTQsNCwwLDAsMSw0LTRIMjA4YTQsNCwwLDAsMSw0LDRabS00OC04OGE0LDQsMCwwLDEsNC00aDMyYTQsNCwwLDAsMSwwLDhIMTY4QTQsNCwwLDAsMSwxNjQsMTIwWiIvPjwvc3ZnPg==)
 */
export function PhJoystickThinIcon(props: PhJoystickThinIconProps) {
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
      <path d="M208,148H132V91.77a36,36,0,1,0-8,0V148H48a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V160A12,12,0,0,0,208,148ZM100,56a28,28,0,1,1,28,28A28,28,0,0,1,100,56ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V160a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-48-88a4,4,0,0,1,4-4h32a4,4,0,0,1,0,8H168A4,4,0,0,1,164,120Z"/>
    </svg>
  );
}
