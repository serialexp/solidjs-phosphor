import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTcuOSwxMTAuMWwtODAtODBhMTQsMTQsMCwwLDAtMTkuOCwwbC04MCw4MEExMy45MiwxMy45MiwwLDAsMCwzNCwxMjB2OTZhNiw2LDAsMCwwLDYsNmg2NGE2LDYsMCwwLDAsNi02VjE1OGgzNnY1OGE2LDYsMCwwLDAsNiw2aDY0YTYsNiwwLDAsMCw2LTZWMTIwQTEzLjkyLDEzLjkyLDAsMCwwLDIxNy45LDExMC4xWk0yMTAsMjEwSDE1OFYxNTJhNiw2LDAsMCwwLTYtNkgxMDRhNiw2LDAsMCwwLTYsNnY1OEg0NlYxMjBhMiwyLDAsMCwxLC41OC0xLjQybDgwLTgwYTIsMiwwLDAsMSwyLjg0LDBsODAsODBBMiwyLDAsMCwxLDIxMCwxMjBaIi8+PC9zdmc+)
 */
export function PhHouseLightIcon(props: PhHouseLightIconProps) {
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
      <path d="M217.9,110.1l-80-80a14,14,0,0,0-19.8,0l-80,80A13.92,13.92,0,0,0,34,120v96a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V158h36v58a6,6,0,0,0,6,6h64a6,6,0,0,0,6-6V120A13.92,13.92,0,0,0,217.9,110.1ZM210,210H158V152a6,6,0,0,0-6-6H104a6,6,0,0,0-6,6v58H46V120a2,2,0,0,1,.58-1.42l80-80a2,2,0,0,1,2.84,0l80,80A2,2,0,0,1,210,120Z"/>
    </svg>
  );
}
