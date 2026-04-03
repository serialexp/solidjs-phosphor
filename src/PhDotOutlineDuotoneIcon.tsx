import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotOutlineDuotoneIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNTIsMTI4YTI0LDI0LDAsMSwxLTI0LTI0QTI0LDI0LDAsMCwxLDE1MiwxMjhaIiBvcGFjaXR5PSIwLjIiLz48cGF0aCBkPSJNMTI4LDk2YTMyLDMyLDAsMSwwLDMyLDMyQTMyLDMyLDAsMCwwLDEyOCw5NlptMCw0OGExNiwxNiwwLDEsMSwxNi0xNkExNiwxNiwwLDAsMSwxMjgsMTQ0WiIvPjwvc3ZnPg==)
 */
export function PhDotOutlineDuotoneIcon(props: PhDotOutlineDuotoneIconProps) {
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
      <path d="M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z" opacity="0.2"/><path d="M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z"/>
    </svg>
  );
}
