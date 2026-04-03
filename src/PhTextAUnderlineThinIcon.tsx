import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAUnderlineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik02Mi4zLDE3MS42MmE0LDQsMCwwLDAsNS4zMi0xLjkyTDg1LjM2LDEzMmg4NS4yOGwxNy43NCwzNy43YTQsNCwwLDEsMCw3LjI0LTMuNGwtNjQtMTM2YTQsNCwwLDAsMC03LjI0LDBsLTY0LDEzNkE0LDQsMCwwLDAsNjIuMywxNzEuNjJaTTEyOCw0MS4zOSwxNjYuODcsMTI0SDg5LjEzWk0yMjAsMjE2YTQsNCwwLDAsMS00LDRINDBhNCw0LDAsMCwxLDAtOEgyMTZBNCw0LDAsMCwxLDIyMCwyMTZaIi8+PC9zdmc+)
 */
export function PhTextAUnderlineThinIcon(props: PhTextAUnderlineThinIconProps) {
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
      <path d="M62.3,171.62a4,4,0,0,0,5.32-1.92L85.36,132h85.28l17.74,37.7a4,4,0,1,0,7.24-3.4l-64-136a4,4,0,0,0-7.24,0l-64,136A4,4,0,0,0,62.3,171.62ZM128,41.39,166.87,124H89.13ZM220,216a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,216Z"/>
    </svg>
  );
}
