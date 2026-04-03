import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSubsetOfThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMjA4YTQsNCwwLDAsMS00LDRINDhhNCw0LDAsMCwxLDAtOEgyMDBBNCw0LDAsMCwxLDIwNCwyMDhabS00LTQ0SDEwNGE1Miw1MiwwLDAsMSwwLTEwNGg5NmE0LDQsMCwwLDAsMC04SDEwNGE2MCw2MCwwLDAsMCwwLDEyMGg5NmE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhSubsetOfThinIcon(props: PhSubsetOfThinIconProps) {
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
      <path d="M204,208a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8H200A4,4,0,0,1,204,208Zm-4-44H104a52,52,0,0,1,0-104h96a4,4,0,0,0,0-8H104a60,60,0,0,0,0,120h96a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
