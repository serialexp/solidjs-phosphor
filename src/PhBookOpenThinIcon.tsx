import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhBookOpenThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzIsNTJIMTYwYTM2LDM2LDAsMCwwLTMyLDE5LjU0QTM2LDM2LDAsMCwwLDk2LDUySDI0YTQsNCwwLDAsMC00LDRWMjAwYTQsNCwwLDAsMCw0LDRIOTZhMjgsMjgsMCwwLDEsMjgsMjgsNCw0LDAsMCwwLDgsMCwyOCwyOCwwLDAsMSwyOC0yOGg3MmE0LDQsMCwwLDAsNC00VjU2QTQsNCwwLDAsMCwyMzIsNTJaTTk2LDE5NkgyOFY2MEg5NmEyOCwyOCwwLDAsMSwyOCwyOFYyMDkuNEEzNS45MywzNS45MywwLDAsMCw5NiwxOTZabTEzMiwwSDE2MGEzNS45NCwzNS45NCwwLDAsMC0yOCwxMy40MVY4OGEyOCwyOCwwLDAsMSwyOC0yOGg2OFoiLz48L3N2Zz4=)
 */
export function PhBookOpenThinIcon(props: PhBookOpenThinIconProps) {
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
      <path d="M232,52H160a36,36,0,0,0-32,19.54A36,36,0,0,0,96,52H24a4,4,0,0,0-4,4V200a4,4,0,0,0,4,4H96a28,28,0,0,1,28,28,4,4,0,0,0,8,0,28,28,0,0,1,28-28h72a4,4,0,0,0,4-4V56A4,4,0,0,0,232,52ZM96,196H28V60H96a28,28,0,0,1,28,28V209.4A35.93,35.93,0,0,0,96,196Zm132,0H160a35.94,35.94,0,0,0-28,13.41V88a28,28,0,0,1,28-28h68Z"/>
    </svg>
  );
}
