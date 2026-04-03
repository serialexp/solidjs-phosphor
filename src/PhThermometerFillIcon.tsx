import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhThermometerFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsNTZhMjgsMjgsMCwxLDAsMjgsMjhBMjgsMjgsMCwwLDAsMjEyLDU2Wm0wLDQwYTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDIxMiw5NlptLTYwLDUwLjA4VjQwYTMyLDMyLDAsMCwwLTY0LDBWMTQ2LjA4YTU2LDU2LDAsMSwwLDY0LDBaTTEzNiwxMDRIMTA0VjQwYTE2LDE2LDAsMCwxLDMyLDBaIi8+PC9zdmc+)
 */
export function PhThermometerFillIcon(props: PhThermometerFillIconProps) {
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
      <path d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,104H104V40a16,16,0,0,1,32,0Z"/>
    </svg>
  );
}
