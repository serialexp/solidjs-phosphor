import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsODB2NzJhNCw0LDAsMCwxLTgsMFY4OS42NkwxMjIuODMsMTk0LjgzYTQsNCwwLDAsMS01LjY2LDBsLTk2LTk2YTQsNCwwLDAsMSw1LjY2LTUuNjZMMTIwLDE4Ni4zNCwyMjIuMzQsODRIMTYwYTQsNCwwLDAsMSwwLThoNzJBNCw0LDAsMCwxLDIzNiw4MFoiLz48L3N2Zz4=)
 */
export function PhArrowElbowRightThinIcon(props: PhArrowElbowRightThinIconProps) {
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
      <path d="M236,80v72a4,4,0,0,1-8,0V89.66L122.83,194.83a4,4,0,0,1-5.66,0l-96-96a4,4,0,0,1,5.66-5.66L120,186.34,222.34,84H160a4,4,0,0,1,0-8h72A4,4,0,0,1,236,80Z"/>
    </svg>
  );
}
