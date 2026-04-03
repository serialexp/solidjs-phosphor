import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhParagraphDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDQsNDhWMTYwSDk2QTU2LDU2LDAsMCwxLDk2LDQ4WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTIwOCw0MEg5NmE2NCw2NCwwLDAsMCwwLDEyOGg0MHY0MGE4LDgsMCwwLDAsMTYsMFY1NmgyNFYyMDhhOCw4LDAsMCwwLDE2LDBWNTZoMTZhOCw4LDAsMCwwLDAtMTZaTTEzNiwxNTJIOTZhNDgsNDgsMCwwLDEsMC05Nmg0MFoiLz48L3N2Zz4=)
 */
export function PhParagraphDuotoneIcon(props: PhParagraphDuotoneIconProps) {
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
      <path d="M144,48V160H96A56,56,0,0,1,96,48Z" opacity="0.2"/><path d="M208,40H96a64,64,0,0,0,0,128h40v40a8,8,0,0,0,16,0V56h24V208a8,8,0,0,0,16,0V56h16a8,8,0,0,0,0-16ZM136,152H96a48,48,0,0,1,0-96h40Z"/>
    </svg>
  );
}
