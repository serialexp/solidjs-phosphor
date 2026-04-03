import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsSixVerticalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsNjBhOCw4LDAsMSwxLTgtOEE4LDgsMCwwLDEsMTAwLDYwWm02NCw4YTgsOCwwLDEsMC04LThBOCw4LDAsMCwwLDE2NCw2OFpNOTIsMTIwYTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDkyLDEyMFptNzIsMGE4LDgsMCwxLDAsOCw4QTgsOCwwLDAsMCwxNjQsMTIwWk05MiwxODhhOCw4LDAsMSwwLDgsOEE4LDgsMCwwLDAsOTIsMTg4Wm03MiwwYTgsOCwwLDEsMCw4LDhBOCw4LDAsMCwwLDE2NCwxODhaIi8+PC9zdmc+)
 */
export function PhDotsSixVerticalThinIcon(props: PhDotsSixVerticalThinIconProps) {
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
      <path d="M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"/>
    </svg>
  );
}
