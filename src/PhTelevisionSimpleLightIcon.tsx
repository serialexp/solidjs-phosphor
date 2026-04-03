import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTelevisionSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNjZIMTQyLjQ4bDM3Ljc2LTM3Ljc2YTYsNiwwLDAsMC04LjQ4LTguNDhMMTI4LDYzLjUxLDg0LjI0LDE5Ljc2YTYsNiwwLDEsMC04LjQ4LDguNDhMMTEzLjUyLDY2SDQwQTE0LDE0LDAsMCwwLDI2LDgwVjIwMGExNCwxNCwwLDAsMCwxNCwxNEgyMTZhMTQsMTQsMCwwLDAsMTQtMTRWODBBMTQsMTQsMCwwLDAsMjE2LDY2Wm0yLDEzNGEyLDIsMCwwLDEtMiwySDQwYTIsMiwwLDAsMS0yLTJWODBhMiwyLDAsMCwxLDItMkgyMTZhMiwyLDAsMCwxLDIsMloiLz48L3N2Zz4=)
 */
export function PhTelevisionSimpleLightIcon(props: PhTelevisionSimpleLightIconProps) {
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
      <path d="M216,66H142.48l37.76-37.76a6,6,0,0,0-8.48-8.48L128,63.51,84.24,19.76a6,6,0,1,0-8.48,8.48L113.52,66H40A14,14,0,0,0,26,80V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V80A14,14,0,0,0,216,66Zm2,134a2,2,0,0,1-2,2H40a2,2,0,0,1-2-2V80a2,2,0,0,1,2-2H216a2,2,0,0,1,2,2Z"/>
    </svg>
  );
}
