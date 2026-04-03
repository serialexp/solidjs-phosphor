import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsNDBWMjE2YTYsNiwwLDAsMS0xMiwwVjQwYTYsNiwwLDAsMSwxMiwwWk0xOTAsNjR2NDBhMTQsMTQsMCwwLDEtMTQsMTRIODBhMTQsMTQsMCwwLDEtMTQtMTRWNjRBMTQsMTQsMCwwLDEsODAsNTBoOTZBMTQsMTQsMCwwLDEsMTkwLDY0Wm0tMTIsMGEyLDIsMCwwLDAtMi0ySDgwYTIsMiwwLDAsMC0yLDJ2NDBhMiwyLDAsMCwwLDIsMmg5NmEyLDIsMCwwLDAsMi0yWm0xMiw4OHY0MGExNCwxNCwwLDAsMS0xNCwxNEg0MGExNCwxNCwwLDAsMS0xNC0xNFYxNTJhMTQsMTQsMCwwLDEsMTQtMTRIMTc2QTE0LDE0LDAsMCwxLDE5MCwxNTJabS0xMiwwYTIsMiwwLDAsMC0yLTJINDBhMiwyLDAsMCwwLTIsMnY0MGEyLDIsMCwwLDAsMiwySDE3NmEyLDIsMCwwLDAsMi0yWiIvPjwvc3ZnPg==)
 */
export function PhAlignRightLightIcon(props: PhAlignRightLightIconProps) {
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
      <path d="M222,40V216a6,6,0,0,1-12,0V40a6,6,0,0,1,12,0ZM190,64v40a14,14,0,0,1-14,14H80a14,14,0,0,1-14-14V64A14,14,0,0,1,80,50h96A14,14,0,0,1,190,64Zm-12,0a2,2,0,0,0-2-2H80a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2h96a2,2,0,0,0,2-2Zm12,88v40a14,14,0,0,1-14,14H40a14,14,0,0,1-14-14V152a14,14,0,0,1,14-14H176A14,14,0,0,1,190,152Zm-12,0a2,2,0,0,0-2-2H40a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H176a2,2,0,0,0,2-2Z"/>
    </svg>
  );
}
