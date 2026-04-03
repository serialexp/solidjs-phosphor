import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJhOCw4LDAsMCwwLTgsOFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTgsOCwwLDAsMCwyMjQsNDhaTTk4LjcxLDEyOCw0MCwxODEuODFWNzQuMTlabTExLjg0LDEwLjg1LDEyLDExLjA1YTgsOCwwLDAsMCwxMC44MiwwbDEyLTExLjA1LDU4LDUzLjE1SDUyLjU3Wk0xNTcuMjksMTI4LDIxNiw3NC4xOFYxODEuODJaIi8+PC9zdmc+)
 */
export function PhEnvelopeFillIcon(props: PhEnvelopeFillIconProps) {
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
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z"/>
    </svg>
  );
}
