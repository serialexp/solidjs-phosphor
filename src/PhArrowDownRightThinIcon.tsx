import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowDownRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTYsODhWMTkyYTQsNCwwLDAsMS00LDRIODhhNCw0LDAsMCwxLDAtOGg5NC4zNEw2MS4xNyw2Ni44M2E0LDQsMCwwLDEsNS42Ni01LjY2TDE4OCwxODIuMzRWODhhNCw0LDAsMCwxLDgsMFoiLz48L3N2Zz4=)
 */
export function PhArrowDownRightThinIcon(props: PhArrowDownRightThinIconProps) {
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
      <path d="M196,88V192a4,4,0,0,1-4,4H88a4,4,0,0,1,0-8h94.34L61.17,66.83a4,4,0,0,1,5.66-5.66L188,182.34V88a4,4,0,0,1,8,0Z"/>
    </svg>
  );
}
