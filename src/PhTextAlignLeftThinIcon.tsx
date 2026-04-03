import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextAlignLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0zNiw2NGE0LDQsMCwwLDEsNC00SDIxNmE0LDQsMCwwLDEsMCw4SDQwQTQsNCwwLDAsMSwzNiw2NFptNCw0NEgxNjhhNCw0LDAsMCwwLDAtOEg0MGE0LDQsMCwwLDAsMCw4Wm0xNzYsMzJINDBhNCw0LDAsMCwwLDAsOEgyMTZhNCw0LDAsMCwwLDAtOFptLTQ4LDQwSDQwYTQsNCwwLDAsMCwwLDhIMTY4YTQsNCwwLDAsMCwwLThaIi8+PC9zdmc+)
 */
export function PhTextAlignLeftThinIcon(props: PhTextAlignLeftThinIconProps) {
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
      <path d="M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
