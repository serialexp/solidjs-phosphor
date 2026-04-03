import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDownloadSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMTQ0djY0YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLTYtNlYxNDRhNiw2LDAsMCwxLDEyLDB2NThIMjEwVjE0NGE2LDYsMCwwLDEsMTIsMFptLTk4LjI0LDQuMjRhNiw2LDAsMCwwLDguNDgsMGw0MC00MGE2LDYsMCwwLDAtOC40OC04LjQ4TDEzNCwxMjkuNTFWMzJhNiw2LDAsMCwwLTEyLDB2OTcuNTFMOTIuMjQsOTkuNzZhNiw2LDAsMCwwLTguNDgsOC40OFoiLz48L3N2Zz4=)
 */
export function PhDownloadSimpleLightIcon(props: PhDownloadSimpleLightIconProps) {
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
      <path d="M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"/>
    </svg>
  );
}
