import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMemberOfBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTQwSDYxLjA4QTY4LjEsNjguMSwwLDAsMCwxMjgsMTk2aDcyYTEyLDEyLDAsMCwxLDAsMjRIMTI4YTkyLDkyLDAsMCwxLDAtMTg0aDcyYTEyLDEyLDAsMCwxLDAsMjRIMTI4YTY4LjEsNjguMSwwLDAsMC02Ni45Miw1NkgyMDBhMTIsMTIsMCwwLDEsMCwyNFoiLz48L3N2Zz4=)
 */
export function PhMemberOfBoldIcon(props: PhMemberOfBoldIconProps) {
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
      <path d="M200,140H61.08A68.1,68.1,0,0,0,128,196h72a12,12,0,0,1,0,24H128a92,92,0,0,1,0-184h72a12,12,0,0,1,0,24H128a68.1,68.1,0,0,0-66.92,56H200a12,12,0,0,1,0,24Z"/>
    </svg>
  );
}
