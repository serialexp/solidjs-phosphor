import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareUpLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzRINDhBMTQsMTQsMCwwLDAsMzQsNDhWMjA4YTE0LDE0LDAsMCwwLDE0LDE0SDIwOGExNCwxNCwwLDAsMCwxNC0xNFY0OEExNCwxNCwwLDAsMCwyMDgsMzRabTIsMTc0YTIsMiwwLDAsMS0yLDJINDhhMiwyLDAsMCwxLTItMlY0OGEyLDIsMCwwLDEsMi0ySDIwOGEyLDIsMCwwLDEsMiwyWm0tNDUuNzYtNTIuMjRhNiw2LDAsMSwxLTguNDgsOC40OEwxMDIsMTEwLjQ4VjE0NGE2LDYsMCwwLDEtMTIsMFY5NmE2LDYsMCwwLDEsNi02aDQ4YTYsNiwwLDAsMSwwLDEySDExMC40OFoiLz48L3N2Zz4=)
 */
export function PhArrowSquareUpLeftLightIcon(props: PhArrowSquareUpLeftLightIconProps) {
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
      <path d="M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34Zm2,174a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-45.76-52.24a6,6,0,1,1-8.48,8.48L102,110.48V144a6,6,0,0,1-12,0V96a6,6,0,0,1,6-6h48a6,6,0,0,1,0,12H110.48Z"/>
    </svg>
  );
}
