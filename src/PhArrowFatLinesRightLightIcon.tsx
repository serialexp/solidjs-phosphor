import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowFatLinesRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYuMjQsMTIzLjc2bC05Ni05NkE2LDYsMCwwLDAsMTMwLDMyVjc0SDEwNGE2LDYsMCwwLDAtNiw2djk2YTYsNiwwLDAsMCw2LDZoMjZ2NDJhNiw2LDAsMCwwLDEwLjI0LDQuMjRsOTYtOTZBNiw2LDAsMCwwLDIzNi4yNCwxMjMuNzZaTTE0MiwyMDkuNTFWMTc2YTYsNiwwLDAsMC02LTZIMTEwVjg2aDI2YTYsNiwwLDAsMCw2LTZWNDYuNDlMMjIzLjUxLDEyOFpNNDYsODB2OTZhNiw2LDAsMCwxLTEyLDBWODBhNiw2LDAsMCwxLDEyLDBabTMyLDB2OTZhNiw2LDAsMCwxLTEyLDBWODBhNiw2LDAsMCwxLDEyLDBaIi8+PC9zdmc+)
 */
export function PhArrowFatLinesRightLightIcon(props: PhArrowFatLinesRightLightIconProps) {
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
      <path d="M236.24,123.76l-96-96A6,6,0,0,0,130,32V74H104a6,6,0,0,0-6,6v96a6,6,0,0,0,6,6h26v42a6,6,0,0,0,10.24,4.24l96-96A6,6,0,0,0,236.24,123.76ZM142,209.51V176a6,6,0,0,0-6-6H110V86h26a6,6,0,0,0,6-6V46.49L223.51,128ZM46,80v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Zm32,0v96a6,6,0,0,1-12,0V80a6,6,0,0,1,12,0Z"/>
    </svg>
  );
}
