import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTableFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJhOCw4LDAsMCwwLTgsOFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTgsOCwwLDAsMCwyMjQsNDhaTTQwLDExMkg4MHYzMkg0MFptNTYsMEgyMTZ2MzJIOTZaTTQwLDE2MEg4MHYzMkg0MFptMTc2LDMySDk2VjE2MEgyMTZ2MzJaIi8+PC9zdmc+)
 */
export function PhTableFillIcon(props: PhTableFillIconProps) {
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
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM40,112H80v32H40Zm56,0H216v32H96ZM40,160H80v32H40Zm176,32H96V160H216v32Z"/>
    </svg>
  );
}
