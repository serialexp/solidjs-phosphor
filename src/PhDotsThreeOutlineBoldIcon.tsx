import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDk2Wm0wLDQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwxMzZabTgwLTQwYTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDIwOCw5NlptMCw0MGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwyMDgsMTM2Wk00OCw5NmEzMiwzMiwwLDEsMCwzMiwzMkEzMiwzMiwwLDAsMCw0OCw5NlptMCw0MGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSw0OCwxMzZaIi8+PC9zdmc+)
 */
export function PhDotsThreeOutlineBoldIcon(props: PhDotsThreeOutlineBoldIconProps) {
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
      <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm80-40a32,32,0,1,0,32,32A32,32,0,0,0,208,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,208,136ZM48,96a32,32,0,1,0,32,32A32,32,0,0,0,48,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,48,136Z"/>
    </svg>
  );
}
