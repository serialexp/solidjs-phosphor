import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjkuNTQsMTMzLjdBNiw2LDAsMCwwLDIyNCwxMzBIMTgyVjEwNGE2LDYsMCwwLDAtNi02SDgwYTYsNiwwLDAsMC02LDZ2MjZIMzJhNiw2LDAsMCwwLTQuMjQsMTAuMjRsOTYsOTZhNiw2LDAsMCwwLDguNDgsMGw5Ni05NkE2LDYsMCwwLDAsMjI5LjU0LDEzMy43Wk0xMjgsMjIzLjUxLDQ2LjQ5LDE0Mkg4MGE2LDYsMCwwLDAsNi02VjExMGg4NHYyNmE2LDYsMCwwLDAsNiw2aDMzLjUxWk03NCw0MGE2LDYsMCwwLDEsNi02aDk2YTYsNiwwLDAsMSwwLDEySDgwQTYsNiwwLDAsMSw3NCw0MFptMCwzMmE2LDYsMCwwLDEsNi02aDk2YTYsNiwwLDAsMSwwLDEySDgwQTYsNiwwLDAsMSw3NCw3MloiLz48L3N2Zz4=)
 */
export function PhArrowFatLinesDownLightIcon(props: PhArrowFatLinesDownLightIconProps) {
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
      <path d="M229.54,133.7A6,6,0,0,0,224,130H182V104a6,6,0,0,0-6-6H80a6,6,0,0,0-6,6v26H32a6,6,0,0,0-4.24,10.24l96,96a6,6,0,0,0,8.48,0l96-96A6,6,0,0,0,229.54,133.7ZM128,223.51,46.49,142H80a6,6,0,0,0,6-6V110h84v26a6,6,0,0,0,6,6h33.51ZM74,40a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,40Zm0,32a6,6,0,0,1,6-6h96a6,6,0,0,1,0,12H80A6,6,0,0,1,74,72Z"/>
    </svg>
  );
}
