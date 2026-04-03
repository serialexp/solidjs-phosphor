import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhEnvelopeSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJhNiw2LDAsMCwwLTYsNlYxOTJhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjU2QTYsNiwwLDAsMCwyMjQsNTBaTTIwOC41OCw2MiwxMjgsMTM1Ljg2LDQ3LjQyLDYyWk0yMTYsMTk0SDQwYTIsMiwwLDAsMS0yLTJWNjkuNjRsODYsNzguNzhhNiw2LDAsMCwwLDguMSwwTDIxOCw2OS42NFYxOTJBMiwyLDAsMCwxLDIxNiwxOTRaIi8+PC9zdmc+)
 */
export function PhEnvelopeSimpleLightIcon(props: PhEnvelopeSimpleLightIconProps) {
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
      <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"/>
    </svg>
  );
}
