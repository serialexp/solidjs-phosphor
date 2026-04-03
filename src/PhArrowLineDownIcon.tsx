import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01MC4zNCwxMTcuNjZhOCw4LDAsMCwxLDExLjMyLTExLjMyTDEyMCwxNjQuNjlWMzJhOCw4LDAsMCwxLDE2LDBWMTY0LjY5bDU4LjM0LTU4LjM1YTgsOCwwLDAsMSwxMS4zMiwxMS4zMmwtNzIsNzJhOCw4LDAsMCwxLTExLjMyLDBaTTIxNiwyMDhINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineDownIcon(props: PhArrowLineDownIconProps) {
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
      <path d="M50.34,117.66a8,8,0,0,1,11.32-11.32L120,164.69V32a8,8,0,0,1,16,0V164.69l58.34-58.35a8,8,0,0,1,11.32,11.32l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
