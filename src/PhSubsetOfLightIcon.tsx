import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubsetOfLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsMjA4YTYsNiwwLDAsMS02LDZINDhhNiw2LDAsMCwxLDAtMTJIMjAwQTYsNiwwLDAsMSwyMDYsMjA4Wm0tNi00NkgxMDRhNTAsNTAsMCwwLDEsMC0xMDBoOTZhNiw2LDAsMCwwLDAtMTJIMTA0YTYyLDYyLDAsMCwwLDAsMTI0aDk2YTYsNiwwLDAsMCwwLTEyWiIvPjwvc3ZnPg==)
 */
export function PhSubsetOfLightIcon(props: PhSubsetOfLightIconProps) {
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
      <path d="M206,208a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H200A6,6,0,0,1,206,208Zm-6-46H104a50,50,0,0,1,0-100h96a6,6,0,0,0,0-12H104a62,62,0,0,0,0,124h96a6,6,0,0,0,0-12Z"/>
    </svg>
  );
}
