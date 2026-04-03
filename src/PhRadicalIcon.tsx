import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhRadicalIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDgsODB2MjRhOCw4LDAsMCwxLTE2LDBWODhIMTMzLjU1TDg3LjQ5LDIxMC44MWE4LDgsMCwwLDEtMTUsMGwtNDgtMTI4YTgsOCwwLDEsMSwxNS01LjYyTDgwLDE4NS4yMmw0MC41MS0xMDhBOCw4LDAsMCwxLDEyOCw3MkgyNDBBOCw4LDAsMCwxLDI0OCw4MFoiLz48L3N2Zz4=)
 */
export function PhRadicalIcon(props: PhRadicalIconProps) {
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
      <path d="M248,80v24a8,8,0,0,1-16,0V88H133.55L87.49,210.81a8,8,0,0,1-15,0l-48-128a8,8,0,1,1,15-5.62L80,185.22l40.51-108A8,8,0,0,1,128,72H240A8,8,0,0,1,248,80Z"/>
    </svg>
  );
}
