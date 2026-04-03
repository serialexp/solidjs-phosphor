import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowArcLeftIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsMTg0YTgsOCwwLDAsMS0xNiwwQTg4LDg4LDAsMCwwLDY1Ljc4LDEyMS43OEw0My40LDE0NEg4OGE4LDgsMCwwLDEsMCwxNkgyNGE4LDgsMCwwLDEtOC04Vjg4YTgsOCwwLDAsMSwxNiwwdjQ0Ljc3bDIyLjQ4LTIyLjMzQTEwNCwxMDQsMCwwLDEsMjMyLDE4NFoiLz48L3N2Zz4=)
 */
export function PhArrowArcLeftIcon(props: PhArrowArcLeftIconProps) {
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
      <path d="M232,184a8,8,0,0,1-16,0A88,88,0,0,0,65.78,121.78L43.4,144H88a8,8,0,0,1,0,16H24a8,8,0,0,1-8-8V88a8,8,0,0,1,16,0v44.77l22.48-22.33A104,104,0,0,1,232,184Z"/>
    </svg>
  );
}
