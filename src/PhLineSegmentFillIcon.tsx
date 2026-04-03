import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhLineSegmentFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEuODEsODMuNzlhMjgsMjgsMCwwLDEtMzMuMTIsNC44M0w4OC42MiwxNzguNjlhMjgsMjgsMCwxLDEtNDQuNDMtNi40OGgwYTI4LDI4LDAsMCwxLDMzLjEyLTQuODNsOTAuMDctOTAuMDdhMjgsMjgsMCwxLDEsNDQuNDMsNi40OFoiLz48L3N2Zz4=)
 */
export function PhLineSegmentFillIcon(props: PhLineSegmentFillIconProps) {
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
      <path d="M211.81,83.79a28,28,0,0,1-33.12,4.83L88.62,178.69a28,28,0,1,1-44.43-6.48h0a28,28,0,0,1,33.12-4.83l90.07-90.07a28,28,0,1,1,44.43,6.48Z"/>
    </svg>
  );
}
