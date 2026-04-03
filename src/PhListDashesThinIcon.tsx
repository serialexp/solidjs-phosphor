import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhListDashesThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik05Miw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDk2QTQsNCwwLDAsMSw5Miw2NFptMTI0LDYwSDk2YTQsNCwwLDAsMCwwLDhIMjE2YTQsNCwwLDAsMCwwLThabTAsNjRIOTZhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFpNNTYsNjBINDBhNCw0LDAsMCwwLDAsOEg1NmE0LDQsMCwwLDAsMC04Wm0wLDY0SDQwYTQsNCwwLDAsMCwwLDhINTZhNCw0LDAsMCwwLDAtOFptMCw2NEg0MGE0LDQsMCwwLDAsMCw4SDU2YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
export function PhListDashesThinIcon(props: PhListDashesThinIconProps) {
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
      <path d="M92,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Zm124,60H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,64H96a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8ZM56,60H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Zm0,64H40a4,4,0,0,0,0,8H56a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
