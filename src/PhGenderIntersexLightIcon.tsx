import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderIntersexLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjZIMTY4YTYsNiwwLDAsMCwwLDEyaDI1LjUybC0zMCwyOS45NEE2Miw2MiwwLDEsMCwxMTQsMTczLjdWMTk0SDg4YTYsNiwwLDAsMCwwLDEyaDI2djI2YTYsNiwwLDAsMCwxMiwwVjIwNmgyNmE2LDYsMCwwLDAsMC0xMkgxMjZWMTczLjdhNjIsNjIsMCwwLDAsNDUuMjgtOTYuNUwyMDIsNDYuNDhWNzJhNiw2LDAsMCwwLDEyLDBWMzJBNiw2LDAsMCwwLDIwOCwyNlpNMTIwLDE2MmE1MCw1MCwwLDEsMSw1MC01MEE1MC4wNiw1MC4wNiwwLDAsMSwxMjAsMTYyWiIvPjwvc3ZnPg==)
 */
export function PhGenderIntersexLightIcon(props: PhGenderIntersexLightIconProps) {
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
      <path d="M208,26H168a6,6,0,0,0,0,12h25.52l-30,29.94A62,62,0,1,0,114,173.7V194H88a6,6,0,0,0,0,12h26v26a6,6,0,0,0,12,0V206h26a6,6,0,0,0,0-12H126V173.7a62,62,0,0,0,45.28-96.5L202,46.48V72a6,6,0,0,0,12,0V32A6,6,0,0,0,208,26ZM120,162a50,50,0,1,1,50-50A50.06,50.06,0,0,1,120,162Z"/>
    </svg>
  );
}
