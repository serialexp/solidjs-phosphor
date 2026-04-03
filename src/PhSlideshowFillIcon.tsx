import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSlideshowFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNjRWMTkyYTE2LDE2LDAsMCwxLTE2LDE2SDY0YTE2LDE2LDAsMCwxLTE2LTE2VjY0QTE2LDE2LDAsMCwxLDY0LDQ4SDE5MkExNiwxNiwwLDAsMSwyMDgsNjRabTI0LTE2YTgsOCwwLDAsMC04LDhWMjAwYTgsOCwwLDAsMCwxNiwwVjU2QTgsOCwwLDAsMCwyMzIsNDhaTTI0LDQ4YTgsOCwwLDAsMC04LDhWMjAwYTgsOCwwLDAsMCwxNiwwVjU2QTgsOCwwLDAsMCwyNCw0OFoiLz48L3N2Zz4=)
 */
export function PhSlideshowFillIcon(props: PhSlideshowFillIconProps) {
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
      <path d="M208,64V192a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V64A16,16,0,0,1,64,48H192A16,16,0,0,1,208,64Zm24-16a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,232,48ZM24,48a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V56A8,8,0,0,0,24,48Z"/>
    </svg>
  );
}
