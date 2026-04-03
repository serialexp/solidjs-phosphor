import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzgsNzJhNiw2LDAsMCwxLTYsNkg5NFYyMDEuNTFsMzcuNzYtMzcuNzVhNiw2LDAsMCwxLDguNDgsOC40OGwtNDgsNDhhNiw2LDAsMCwxLTguNDgsMGwtNDgtNDhhNiw2LDAsMCwxLDguNDgtOC40OEw4MiwyMDEuNTFWNzJhNiw2LDAsMCwxLDYtNkgyMzJBNiw2LDAsMCwxLDIzOCw3MloiLz48L3N2Zz4=)
 */
export function PhArrowElbowLeftDownLightIcon(props: PhArrowElbowLeftDownLightIconProps) {
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
      <path d="M238,72a6,6,0,0,1-6,6H94V201.51l37.76-37.75a6,6,0,0,1,8.48,8.48l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L82,201.51V72a6,6,0,0,1,6-6H232A6,6,0,0,1,238,72Z"/>
    </svg>
  );
}
