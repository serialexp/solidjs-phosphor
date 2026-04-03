import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLineRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTIzLjc2bC05Ni05NkE2LDYsMCwwLDAsMTMwLDMyVjc0SDcyYTYsNiwwLDAsMC02LDZ2OTZhNiw2LDAsMCwwLDYsNmg1OHY0MmE2LDYsMCwwLDAsMTAuMjQsNC4yNGw5Ni05NkE2LDYsMCwwLDAsMjM2LjI0LDEyMy43NlpNMTQyLDIwOS41MVYxNzZhNiw2LDAsMCwwLTYtNkg3OFY4Nmg1OGE2LDYsMCwwLDAsNi02VjQ2LjQ5TDIyMy41MSwxMjhaTTQ2LDgwdjk2YTYsNiwwLDAsMS0xMiwwVjgwYTYsNiwwLDAsMSwxMiwwWiIvPjwvc3ZnPg==)
 */
export function PhArrowFatLineRightLightIcon(props: PhArrowFatLineRightLightIconProps) {
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
      <path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H72a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h58v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H78V86h58a6,6,0,0,0,6-6V46.49L223.51,128ZM46,80v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
