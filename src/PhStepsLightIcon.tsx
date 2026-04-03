import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStepsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsNTZhNiw2LDAsMCwxLTYsNkgxOTB2NDJhNiw2LDAsMCwxLTYsNkgxMzR2NDJhNiw2LDAsMCwxLTYsNkg3OHY0MmE2LDYsMCwwLDEtNiw2SDE2YTYsNiwwLDAsMSwwLTEySDY2VjE1MmE2LDYsMCwwLDEsNi02aDUwVjEwNGE2LDYsMCwwLDEsNi02aDUwVjU2YTYsNiwwLDAsMSw2LTZoNTZBNiw2LDAsMCwxLDI0Niw1NloiLz48L3N2Zz4=)
 */
export function PhStepsLightIcon(props: PhStepsLightIconProps) {
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
      <path d="M246,56a6,6,0,0,1-6,6H190v42a6,6,0,0,1-6,6H134v42a6,6,0,0,1-6,6H78v42a6,6,0,0,1-6,6H16a6,6,0,0,1,0-12H66V152a6,6,0,0,1,6-6h50V104a6,6,0,0,1,6-6h50V56a6,6,0,0,1,6-6h56A6,6,0,0,1,246,56Z"/>
    </svg>
  );
}
