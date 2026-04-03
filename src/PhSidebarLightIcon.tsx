import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSidebarLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDJINDBBMTQsMTQsMCwwLDAsMjYsNTZWMjAwYTE0LDE0LDAsMCwwLDE0LDE0SDIxNmExNCwxNCwwLDAsMCwxNC0xNFY1NkExNCwxNCwwLDAsMCwyMTYsNDJaTTM4LDIwMFYxNTBINTZhNiw2LDAsMCwwLDAtMTJIMzhWMTE4SDU2YTYsNiwwLDAsMCwwLTEySDM4Vjg2SDU2YTYsNiwwLDAsMCwwLTEySDM4VjU2YTIsMiwwLDAsMSwyLTJIODJWMjAySDQwQTIsMiwwLDAsMSwzOCwyMDBabTE4MCwwYTIsMiwwLDAsMS0yLDJIOTRWNTRIMjE2YTIsMiwwLDAsMSwyLDJaIi8+PC9zdmc+)
 */
export function PhSidebarLightIcon(props: PhSidebarLightIconProps) {
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
      <path d="M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM38,200V150H56a6,6,0,0,0,0-12H38V118H56a6,6,0,0,0,0-12H38V86H56a6,6,0,0,0,0-12H38V56a2,2,0,0,1,2-2H82V202H40A2,2,0,0,1,38,200Zm180,0a2,2,0,0,1-2,2H94V54H216a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
