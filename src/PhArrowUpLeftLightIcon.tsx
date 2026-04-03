import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowUpLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYuMjQsMTk2LjI0YTYsNiwwLDAsMS04LjQ4LDBMNzAsNzguNDhWMTY4YTYsNiwwLDAsMS0xMiwwVjY0YTYsNiwwLDAsMSw2LTZIMTY4YTYsNiwwLDAsMSwwLDEySDc4LjQ4TDE5Ni4yNCwxODcuNzZBNiw2LDAsMCwxLDE5Ni4yNCwxOTYuMjRaIi8+PC9zdmc+)
 */
export function PhArrowUpLeftLightIcon(props: PhArrowUpLeftLightIconProps) {
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
      <path d="M196.24,196.24a6,6,0,0,1-8.48,0L70,78.48V168a6,6,0,0,1-12,0V64a6,6,0,0,1,6-6H168a6,6,0,0,1,0,12H78.48L196.24,187.76A6,6,0,0,1,196.24,196.24Z"/>
    </svg>
  );
}
