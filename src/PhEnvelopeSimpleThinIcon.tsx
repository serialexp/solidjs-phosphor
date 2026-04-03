import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeSimpleThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTJIMzJhNCw0LDAsMCwwLTQsNFYxOTJhMTIsMTIsMCwwLDAsMTIsMTJIMjE2YTEyLDEyLDAsMCwwLDEyLTEyVjU2QTQsNCwwLDAsMCwyMjQsNTJabS0xMC4yOCw4TDEyOCwxMzguNTcsNDIuMjgsNjBaTTIxNiwxOTZINDBhNCw0LDAsMCwxLTQtNFY2NS4wOUwxMjUuMywxNDdhNCw0LDAsMCwwLDUuNCwwTDIyMCw2NS4wOVYxOTJBNCw0LDAsMCwxLDIxNiwxOTZaIi8+PC9zdmc+)
 */
export function PhEnvelopeSimpleThinIcon(props: PhEnvelopeSimpleThinIconProps) {
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
      <path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"/>
    </svg>
  );
}
