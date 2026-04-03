import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTQsNCwwLDAsMS00LDRIODEuNjZsNjUuMTcsNjUuMTdhNCw0LDAsMCwxLTUuNjYsNS42NmwtNzItNzJhNCw0LDAsMCwxLDAtNS42Nmw3Mi03MmE0LDQsMCwxLDEsNS42Niw1LjY2TDgxLjY2LDEyNEgyMjRBNCw0LDAsMCwxLDIyOCwxMjhaTTQwLDM2YTQsNCwwLDAsMC00LDRWMjE2YTQsNCwwLDAsMCw4LDBWNDBBNCw0LDAsMCwwLDQwLDM2WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineLeftThinIcon(props: PhArrowLineLeftThinIconProps) {
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
      <path d="M228,128a4,4,0,0,1-4,4H81.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,1,1,5.66,5.66L81.66,124H224A4,4,0,0,1,228,128ZM40,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,40,36Z"/>
    </svg>
  );
}
