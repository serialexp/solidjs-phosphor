import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDeviceMobileSpeakerFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTZIODBBMjQsMjQsMCwwLDAsNTYsNDBWMjE2YTI0LDI0LDAsMCwwLDI0LDI0aDk2YTI0LDI0LDAsMCwwLDI0LTI0VjQwQTI0LDI0LDAsMCwwLDE3NiwxNlpNMTYwLDY0SDk2YTgsOCwwLDAsMSwwLTE2aDY0YTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhDeviceMobileSpeakerFillIcon(props: PhDeviceMobileSpeakerFillIconProps) {
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
      <path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM160,64H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
