import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhProhibitFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTI4YTcxLjY5LDcxLjY5LDAsMCwxLTE1Ljc4LDQ0LjkxTDgzLjA5LDcxLjc4QTcxLjk1LDcxLjk1LDAsMCwxLDIwMCwxMjhaTTU2LDEyOGE3MS45NSw3MS45NSwwLDAsMCwxMTYuOTEsNTYuMjJMNzEuNzgsODMuMDlBNzEuNjksNzEuNjksMCwwLDAsNTYsMTI4Wm0xODAsMEExMDgsMTA4LDAsMSwxLDEyOCwyMCwxMDguMTIsMTA4LjEyLDAsMCwxLDIzNiwxMjhabS0yMCwwYTg4LDg4LDAsMSwwLTg4LDg4QTg4LjEsODguMSwwLDAsMCwyMTYsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhProhibitFillIcon(props: PhProhibitFillIconProps) {
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
      <path d="M200,128a71.69,71.69,0,0,1-15.78,44.91L83.09,71.78A71.95,71.95,0,0,1,200,128ZM56,128a71.95,71.95,0,0,0,116.91,56.22L71.78,83.09A71.69,71.69,0,0,0,56,128Zm180,0A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-20,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"/>
    </svg>
  );
}
