import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberEightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTUuNTUsMTE5LjI3YTQ4LDQ4LDAsMSwwLTU1LjEsMCw1Niw1NiwwLDEsMCw1NS4xLDBaTTk2LDgwYTMyLDMyLDAsMSwxLDMyLDMyQTMyLDMyLDAsMCwxLDk2LDgwWm0zMiwxMjhhNDAsNDAsMCwxLDEsNDAtNDBBNDAsNDAsMCwwLDEsMTI4LDIwOFoiLz48L3N2Zz4=)
 */
export function PhNumberEightIcon(props: PhNumberEightIconProps) {
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
      <path d="M155.55,119.27a48,48,0,1,0-55.1,0,56,56,0,1,0,55.1,0ZM96,80a32,32,0,1,1,32,32A32,32,0,0,1,96,80Zm32,128a40,40,0,1,1,40-40A40,40,0,0,1,128,208Z"/>
    </svg>
  );
}
