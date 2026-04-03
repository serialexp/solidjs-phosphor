import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberThreeThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIsMTYwYTUyLDUyLDAsMCwxLTg2LjY3LDM4Ljc2LDQsNCwwLDEsMSw1LjM0LTZBNDQsNDQsMCwxLDAsMTIwLDExNmE0LDQsMCwwLDEtMy4yLTYuNEwxNjAsNTJIODhhNCw0LDAsMCwxLDAtOGg4MGE0LDQsMCwwLDEsMy4yLDYuNGwtNDMuNjEsNTguMTVBNTIuMDgsNTIuMDgsMCwwLDEsMTcyLDE2MFoiLz48L3N2Zz4=)
 */
export function PhNumberThreeThinIcon(props: PhNumberThreeThinIconProps) {
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
      <path d="M172,160a52,52,0,0,1-86.67,38.76,4,4,0,1,1,5.34-6A44,44,0,1,0,120,116a4,4,0,0,1-3.2-6.4L160,52H88a4,4,0,0,1,0-8h80a4,4,0,0,1,3.2,6.4l-43.61,58.15A52.08,52.08,0,0,1,172,160Z"/>
    </svg>
  );
}
