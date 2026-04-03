import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDotsThreeLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzgsMTI4YTEwLDEwLDAsMSwxLTEwLTEwQTEwLDEwLDAsMCwxLDEzOCwxMjhaTTYwLDExOGExMCwxMCwwLDEsMCwxMCwxMEExMCwxMCwwLDAsMCw2MCwxMThabTEzNiwwYTEwLDEwLDAsMSwwLDEwLDEwQTEwLDEwLDAsMCwwLDE5NiwxMThaIi8+PC9zdmc+)
 */
export function PhDotsThreeLightIcon(props: PhDotsThreeLightIconProps) {
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
      <path d="M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"/>
    </svg>
  );
}
