import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowClockwiseIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsNTZ2NDhhOCw4LDAsMCwxLTgsOEgxODRhOCw4LDAsMCwxLDAtMTZIMjExLjRMMTg0LjgxLDcxLjY0bC0uMjUtLjI0YTgwLDgwLDAsMSwwLTEuNjcsMTE0Ljc4LDgsOCwwLDAsMSwxMSwxMS42M0E5NS40NCw5NS40NCwwLDAsMSwxMjgsMjI0aC0xLjMyQTk2LDk2LDAsMSwxLDE5NS43NSw2MEwyMjQsODUuOFY1NmE4LDgsMCwxLDEsMTYsMFoiLz48L3N2Zz4=)
 */
export function PhArrowClockwiseIcon(props: PhArrowClockwiseIconProps) {
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
      <path d="M240,56v48a8,8,0,0,1-8,8H184a8,8,0,0,1,0-16H211.4L184.81,71.64l-.25-.24a80,80,0,1,0-1.67,114.78,8,8,0,0,1,11,11.63A95.44,95.44,0,0,1,128,224h-1.32A96,96,0,1,1,195.75,60L224,85.8V56a8,8,0,1,1,16,0Z"/>
    </svg>
  );
}
