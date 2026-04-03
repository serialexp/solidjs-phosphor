import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhStairsLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMjZINTZBMTQsMTQsMCwwLDAsNDIsNDBWMjE2YTE0LDE0LDAsMCwwLDE0LDE0SDIwMGExNCwxNCwwLDAsMCwxNC0xNFY0MEExNCwxNCwwLDAsMCwyMDAsMjZaTTE1MiwxNDJoNTB2MjhIMTEwVjE0MlptNi0xMlYxMDJoNDR2MjhaTTU2LDM4SDIwMGEyLDIsMCwwLDEsMiwyVjkwSDE1MmE2LDYsMCwwLDAtNiw2djM0SDEwNGE2LDYsMCwwLDAtNiw2djM0SDU0VjQwQTIsMiwwLDAsMSw1NiwzOFpNMjAwLDIxOEg1NmEyLDIsMCwwLDEtMi0yVjE4MkgyMDJ2MzRBMiwyLDAsMCwxLDIwMCwyMThaIi8+PC9zdmc+)
 */
export function PhStairsLightIcon(props: PhStairsLightIconProps) {
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
      <path d="M200,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26ZM152,142h50v28H110V142Zm6-12V102h44v28ZM56,38H200a2,2,0,0,1,2,2V90H152a6,6,0,0,0-6,6v34H104a6,6,0,0,0-6,6v34H54V40A2,2,0,0,1,56,38ZM200,218H56a2,2,0,0,1-2-2V182H202v34A2,2,0,0,1,200,218Z"/>
    </svg>
  );
}
