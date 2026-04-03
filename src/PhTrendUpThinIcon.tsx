import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrendUpThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsNTZ2NjRhNCw0LDAsMCwxLTgsMFY2NS42NmwtODkuMTcsODkuMTdhNCw0LDAsMCwxLTUuNjYsMEw5NiwxMTcuNjYsMjYuODMsMTg2LjgzYTQsNCwwLDAsMS01LjY2LTUuNjZsNzItNzJhNCw0LDAsMCwxLDUuNjYsMEwxMzYsMTQ2LjM0LDIyMi4zNCw2MEgxNjhhNCw0LDAsMCwxLDAtOGg2NEE0LDQsMCwwLDEsMjM2LDU2WiIvPjwvc3ZnPg==)
 */
export function PhTrendUpThinIcon(props: PhTrendUpThinIconProps) {
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
      <path d="M236,56v64a4,4,0,0,1-8,0V65.66l-89.17,89.17a4,4,0,0,1-5.66,0L96,117.66,26.83,186.83a4,4,0,0,1-5.66-5.66l72-72a4,4,0,0,1,5.66,0L136,146.34,222.34,60H168a4,4,0,0,1,0-8h64A4,4,0,0,1,236,56Z"/>
    </svg>
  );
}
