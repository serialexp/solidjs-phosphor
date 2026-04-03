import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWarningDiamondBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsNjhhMTIsMTIsMCwwLDEsMTIsMTJ2NTJhMTIsMTIsMCwwLDEtMjQsMFY4MEExMiwxMiwwLDAsMSwxMjgsNjhabTAsODhhMTYsMTYsMCwxLDAsMTYsMTZBMTYsMTYsMCwwLDAsMTI4LDE1NlptMTE2LTI4YTE5Ljg2LDE5Ljg2LDAsMCwxLTUuODQsMTQuMTFsLTk2LDk2LjA2YTIwLDIwLDAsMCwxLTI4LjIxLDBoMGwtOTYtOTYuMDZhMjAsMjAsMCwwLDEsMC0yOC4yMmw5Ni4wNS05Ni4wNmEyMCwyMCwwLDAsMSwyOC4yMSwwbDk2LjA2LDk2LjA2QTE5Ljg2LDE5Ljg2LDAsMCwxLDI0NCwxMjhabS0yNS42OCwwTDEyOCwzNy42NywzNy42OCwxMjgsMTI4LDIxOC4zM1oiLz48L3N2Zz4=)
 */
export function PhWarningDiamondBoldIcon(props: PhWarningDiamondBoldIconProps) {
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
      <path d="M128,68a12,12,0,0,1,12,12v52a12,12,0,0,1-24,0V80A12,12,0,0,1,128,68Zm0,88a16,16,0,1,0,16,16A16,16,0,0,0,128,156Zm116-28a19.86,19.86,0,0,1-5.84,14.11l-96,96.06a20,20,0,0,1-28.21,0h0l-96-96.06a20,20,0,0,1,0-28.22l96.05-96.06a20,20,0,0,1,28.21,0l96.06,96.06A19.86,19.86,0,0,1,244,128Zm-25.68,0L128,37.67,37.68,128,128,218.33Z"/>
    </svg>
  );
}
