import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjZINzJBMzAsMzAsMCwwLDAsNDIsNTZWMjI0YTYsNiwwLDAsMCw2LDZIMTkyYTYsNiwwLDAsMCwwLTEySDU0di0yYTE4LDE4LDAsMCwxLDE4LTE4SDIwOGE2LDYsMCwwLDAsNi02VjMyQTYsNiwwLDAsMCwyMDgsMjZabS02LDE2MEg3MmEyOS44NywyOS44NywwLDAsMC0xOCw2VjU2QTE4LDE4LDAsMCwxLDcyLDM4SDIwMloiLz48L3N2Zz4=)
 */
export function PhBookLightIcon(props: PhBookLightIconProps) {
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
      <path d="M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z"/>
    </svg>
  );
}
