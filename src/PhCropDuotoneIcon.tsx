import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCropDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsNjRWMTkySDY0VjY0WiIgb3BhY2l0eT0iMC4yIi8+PHBhdGggZD0iTTI0MCwxOTJhOCw4LDAsMCwxLTgsOEgyMDB2MzJhOCw4LDAsMCwxLTE2LDBWMjAwSDY0YTgsOCwwLDAsMS04LThWNzJIMjRhOCw4LDAsMCwxLDAtMTZINTZWMjRhOCw4LDAsMCwxLDE2LDBWMTg0SDIzMkE4LDgsMCwwLDEsMjQwLDE5MlpNOTYsNzJoODh2ODhhOCw4LDAsMCwwLDE2LDBWNjRhOCw4LDAsMCwwLTgtOEg5NmE4LDgsMCwwLDAsMCwxNloiLz48L3N2Zz4=)
 */
export function PhCropDuotoneIcon(props: PhCropDuotoneIconProps) {
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
      <path d="M192,64V192H64V64Z" opacity="0.2"/><path d="M240,192a8,8,0,0,1-8,8H200v32a8,8,0,0,1-16,0V200H64a8,8,0,0,1-8-8V72H24a8,8,0,0,1,0-16H56V24a8,8,0,0,1,16,0V184H232A8,8,0,0,1,240,192ZM96,72h88v88a8,8,0,0,0,16,0V64a8,8,0,0,0-8-8H96a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
