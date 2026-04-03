import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextOutdentLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTI4YTYsNiwwLDAsMS02LDZIMTEyYTYsNiwwLDAsMSwwLTEySDIxNkE2LDYsMCwwLDEsMjIyLDEyOFpNMTEyLDcwSDIxNmE2LDYsMCwwLDAsMC0xMkgxMTJhNiw2LDAsMCwwLDAsMTJaTTIxNiwxODZINDBhNiw2LDAsMCwwLDAsMTJIMjE2YTYsNiwwLDAsMCwwLTEyWk03MiwxNDJhNiw2LDAsMCwwLDQuMjQtMTAuMjRMNDAuNDksOTYsNzYuMjQsNjAuMjRhNiw2LDAsMCwwLTguNDgtOC40OGwtNDAsNDBhNiw2LDAsMCwwLDAsOC40OGw0MCw0MEE2LDYsMCwwLDAsNzIsMTQyWiIvPjwvc3ZnPg==)
 */
export function PhTextOutdentLightIcon(props: PhTextOutdentLightIconProps) {
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
      <path d="M222,128a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM112,70H216a6,6,0,0,0,0-12H112a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12ZM72,142a6,6,0,0,0,4.24-10.24L40.49,96,76.24,60.24a6,6,0,0,0-8.48-8.48l-40,40a6,6,0,0,0,0,8.48l40,40A6,6,0,0,0,72,142Z"/>
    </svg>
  );
}
