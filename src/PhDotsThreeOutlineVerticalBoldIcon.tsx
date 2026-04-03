import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeOutlineVerticalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjgsOTZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDk2Wm0wLDQwYTgsOCwwLDEsMSw4LThBOCw4LDAsMCwxLDEyOCwxMzZabTAtNTZBMzIsMzIsMCwxLDAsOTYsNDgsMzIsMzIsMCwwLDAsMTI4LDgwWm0wLTQwYTgsOCwwLDEsMS04LDhBOCw4LDAsMCwxLDEyOCw0MFptMCwxMzZhMzIsMzIsMCwxLDAsMzIsMzJBMzIsMzIsMCwwLDAsMTI4LDE3NlptMCw0MGE4LDgsMCwxLDEsOC04QTgsOCwwLDAsMSwxMjgsMjE2WiIvPjwvc3ZnPg==)
 */
export function PhDotsThreeOutlineVerticalBoldIcon(props: PhDotsThreeOutlineVerticalBoldIconProps) {
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
      <path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Zm0-56A32,32,0,1,0,96,48,32,32,0,0,0,128,80Zm0-40a8,8,0,1,1-8,8A8,8,0,0,1,128,40Zm0,136a32,32,0,1,0,32,32A32,32,0,0,0,128,176Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,216Z"/>
    </svg>
  );
}
