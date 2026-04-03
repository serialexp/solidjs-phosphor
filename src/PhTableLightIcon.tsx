import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTableLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjQsNTBIMzJhNiw2LDAsMCwwLTYsNlYxOTJhMTQsMTQsMCwwLDAsMTQsMTRIMjE2YTE0LDE0LDAsMCwwLDE0LTE0VjU2QTYsNiwwLDAsMCwyMjQsNTBaTTM4LDExMEg4MnYzNkgzOFptNTYsMEgyMTh2MzZIOTRaTTIxOCw2MlY5OEgzOFY2MlpNMzgsMTkyVjE1OEg4MnYzNkg0MEEyLDIsMCwwLDEsMzgsMTkyWm0xNzgsMkg5NFYxNThIMjE4djM0QTIsMiwwLDAsMSwyMTYsMTk0WiIvPjwvc3ZnPg==)
 */
export function PhTableLightIcon(props: PhTableLightIconProps) {
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
      <path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM38,110H82v36H38Zm56,0H218v36H94ZM218,62V98H38V62ZM38,192V158H82v36H40A2,2,0,0,1,38,192Zm178,2H94V158H218v34A2,2,0,0,1,216,194Z"/>
    </svg>
  );
}
