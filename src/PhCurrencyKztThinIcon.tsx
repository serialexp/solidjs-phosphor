import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyKztThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsOTZhNCw0LDAsMCwxLTQsNEgxMzJWMjE2YTQsNCwwLDAsMS04LDBWMTAwSDU2YTQsNCwwLDAsMSwwLThIMjAwQTQsNCwwLDAsMSwyMDQsOTZaTTU2LDYwSDIwMGE0LDQsMCwwLDAsMC04SDU2YTQsNCwwLDAsMCwwLDhaIi8+PC9zdmc+)
 */
export function PhCurrencyKztThinIcon(props: PhCurrencyKztThinIconProps) {
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
      <path d="M204,96a4,4,0,0,1-4,4H132V216a4,4,0,0,1-8,0V100H56a4,4,0,0,1,0-8H200A4,4,0,0,1,204,96ZM56,60H200a4,4,0,0,0,0-8H56a4,4,0,0,0,0,8Z"/>
    </svg>
  );
}
