import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRoadHorizonLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzQuOTQsMTk3LjIzYTYsNiwwLDAsMS04LjE3LTIuMjlMMTU2LjQ5LDcwSDEzNFY4MGE2LDYsMCwwLDEtMTIsMFY3MEg5OS41MUwyOS4yMywxOTQuOTRhNiw2LDAsMSwxLTEwLjQ2LTUuODhMODUuNzQsNzBIMjRhNiw2LDAsMCwxLDAtMTJIMjMyYTYsNiwwLDAsMSwwLDEySDE3MC4yNmw2NywxMTkuMDZBNiw2LDAsMCwxLDIzNC45NCwxOTcuMjNaTTEyOCwxMTRhNiw2LDAsMCwwLTYsNnYxNmE2LDYsMCwwLDAsMTIsMFYxMjBBNiw2LDAsMCwwLDEyOCwxMTRabTAsNTZhNiw2LDAsMCwwLTYsNnYxNmE2LDYsMCwwLDAsMTIsMFYxNzZBNiw2LDAsMCwwLDEyOCwxNzBaIi8+PC9zdmc+)
 */
export function PhRoadHorizonLightIcon(props: PhRoadHorizonLightIconProps) {
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
      <path d="M234.94,197.23a6,6,0,0,1-8.17-2.29L156.49,70H134V80a6,6,0,0,1-12,0V70H99.51L29.23,194.94a6,6,0,1,1-10.46-5.88L85.74,70H24a6,6,0,0,1,0-12H232a6,6,0,0,1,0,12H170.26l67,119.06A6,6,0,0,1,234.94,197.23ZM128,114a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V120A6,6,0,0,0,128,114Zm0,56a6,6,0,0,0-6,6v16a6,6,0,0,0,12,0V176A6,6,0,0,0,128,170Z"/>
    </svg>
  );
}
