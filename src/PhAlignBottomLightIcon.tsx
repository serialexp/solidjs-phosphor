import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignBottomLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjIsMjE2YTYsNiwwLDAsMS02LDZINDBhNiw2LDAsMCwxLDAtMTJIMjE2QTYsNiwwLDAsMSwyMjIsMjE2Wm0tODQtNDBWODBhMTQsMTQsMCwwLDEsMTQtMTRoNDBhMTQsMTQsMCwwLDEsMTQsMTR2OTZhMTQsMTQsMCwwLDEtMTQsMTRIMTUyQTE0LDE0LDAsMCwxLDEzOCwxNzZabTEyLDBhMiwyLDAsMCwwLDIsMmg0MGEyLDIsMCwwLDAsMi0yVjgwYTIsMiwwLDAsMC0yLTJIMTUyYTIsMiwwLDAsMC0yLDJaTTUwLDE3NlY0MEExNCwxNCwwLDAsMSw2NCwyNmg0MGExNCwxNCwwLDAsMSwxNCwxNFYxNzZhMTQsMTQsMCwwLDEtMTQsMTRINjRBMTQsMTQsMCwwLDEsNTAsMTc2Wm0xMiwwYTIsMiwwLDAsMCwyLDJoNDBhMiwyLDAsMCwwLDItMlY0MGEyLDIsMCwwLDAtMi0ySDY0YTIsMiwwLDAsMC0yLDJaIi8+PC9zdmc+)
 */
export function PhAlignBottomLightIcon(props: PhAlignBottomLightIconProps) {
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
      <path d="M222,216a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,216Zm-84-40V80a14,14,0,0,1,14-14h40a14,14,0,0,1,14,14v96a14,14,0,0,1-14,14H152A14,14,0,0,1,138,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V80a2,2,0,0,0-2-2H152a2,2,0,0,0-2,2ZM50,176V40A14,14,0,0,1,64,26h40a14,14,0,0,1,14,14V176a14,14,0,0,1-14,14H64A14,14,0,0,1,50,176Zm12,0a2,2,0,0,0,2,2h40a2,2,0,0,0,2-2V40a2,2,0,0,0-2-2H64a2,2,0,0,0-2,2Z"/>
    </svg>
  );
}
