import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLinkSimpleHorizontalThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik04MCwxMjRoOTZhNCw0LDAsMCwxLDAsOEg4MGE0LDQsMCwwLDEsMC04Wm0yNCw0OEg2NGE0NCw0NCwwLDAsMSwwLTg4aDQwYTQsNCwwLDAsMCwwLThINjRhNTIsNTIsMCwwLDAsMCwxMDRoNDBhNCw0LDAsMCwwLDAtOFptODgtOTZIMTUyYTQsNCwwLDAsMCwwLDhoNDBhNDQsNDQsMCwwLDEsMCw4OEgxNTJhNCw0LDAsMCwwLDAsOGg0MGE1Miw1MiwwLDAsMCwwLTEwNFoiLz48L3N2Zz4=)
 */
export function PhLinkSimpleHorizontalThinIcon(props: PhLinkSimpleHorizontalThinIconProps) {
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
      <path d="M80,124h96a4,4,0,0,1,0,8H80a4,4,0,0,1,0-8Zm24,48H64a44,44,0,0,1,0-88h40a4,4,0,0,0,0-8H64a52,52,0,0,0,0,104h40a4,4,0,0,0,0-8Zm88-96H152a4,4,0,0,0,0,8h40a44,44,0,0,1,0,88H152a4,4,0,0,0,0,8h40a52,52,0,0,0,0-104Z"/>
    </svg>
  );
}
