import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01MC4zNCwxMTcuNjZBOCw4LDAsMCwxLDU2LDEwNGg2NFYzMmE4LDgsMCwwLDEsMTYsMHY3Mmg2NGE4LDgsMCwwLDEsNS42NiwxMy42NmwtNzIsNzJhOCw4LDAsMCwxLTExLjMyLDBaTTIxNiwyMDhINDBhOCw4LDAsMCwwLDAsMTZIMjE2YTgsOCwwLDAsMCwwLTE2WiIvPjwvc3ZnPg==)
 */
export function PhArrowLineDownFillIcon(props: PhArrowLineDownFillIconProps) {
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
      <path d="M50.34,117.66A8,8,0,0,1,56,104h64V32a8,8,0,0,1,16,0v72h64a8,8,0,0,1,5.66,13.66l-72,72a8,8,0,0,1-11.32,0ZM216,208H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"/>
    </svg>
  );
}
