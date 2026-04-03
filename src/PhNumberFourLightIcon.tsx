import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberFourLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODQsMTYySDE2NlY0OGE2LDYsMCwwLDAtMTAuNjktMy43NWwtOTYsMTIwQTYsNiwwLDAsMCw2NCwxNzRoOTB2MzRhNiw2LDAsMCwwLDEyLDBWMTc0aDE4YTYsNiwwLDAsMCwwLTEyWm0tMzAsMEg3Ni40OEwxNTQsNjUuMVoiLz48L3N2Zz4=)
 */
export function PhNumberFourLightIcon(props: PhNumberFourLightIconProps) {
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
      <path d="M184,162H166V48a6,6,0,0,0-10.69-3.75l-96,120A6,6,0,0,0,64,174h90v34a6,6,0,0,0,12,0V174h18a6,6,0,0,0,0-12Zm-30,0H76.48L154,65.1Z"/>
    </svg>
  );
}
