import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeSimpleFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNDhIMzJhOCw4LDAsMCwwLTgsOFYxOTJhMTYsMTYsMCwwLDAsMTYsMTZIMjE2YTE2LDE2LDAsMCwwLDE2LTE2VjU2QTgsOCwwLDAsMCwyMjQsNDhabS04LDE0NEg0MFY3NC4xOWw4Mi41OSw3NS43MWE4LDgsMCwwLDAsMTAuODIsMEwyMTYsNzQuMTlWMTkyWiIvPjwvc3ZnPg==)
 */
export function PhEnvelopeSimpleFillIcon(props: PhEnvelopeSimpleFillIconProps) {
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
      <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"/>
    </svg>
  );
}
