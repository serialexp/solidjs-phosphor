import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArticleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJabTIsMTU4YTIsMiwwLDAsMS0yLDJINDBhMiwyLDAsMCwxLTItMlY1NmEyLDIsMCwwLDEsMi0ySDIxNmEyLDIsMCwwLDEsMiwyWk0xODIsOTZhNiw2LDAsMCwxLTYsNkg4MGE2LDYsMCwwLDEsMC0xMmg5NkE2LDYsMCwwLDEsMTgyLDk2Wm0wLDMyYTYsNiwwLDAsMS02LDZIODBhNiw2LDAsMCwxLDAtMTJoOTZBNiw2LDAsMCwxLDE4MiwxMjhabTAsMzJhNiw2LDAsMCwxLTYsNkg4MGE2LDYsMCwwLDEsMC0xMmg5NkE2LDYsMCwwLDEsMTgyLDE2MFoiLz48L3N2Zz4=)
 */
export function PhArticleLightIcon(props: PhArticleLightIconProps) {
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
      <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42Zm2,158a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2ZM182,96a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,96Zm0,32a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,128Zm0,32a6,6,0,0,1-6,6H80a6,6,0,0,1,0-12h96A6,6,0,0,1,182,160Z"/>
    </svg>
  );
}
