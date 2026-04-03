import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhHouseLineBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMjA0SDIyOFYxNDRhMTIsMTIsMCwwLDAsMTIuNDktMTkuNzhMMTQyLjE0LDI1Ljg1YTIwLDIwLDAsMCwwLTI4LjI4LDBMMTUuNTEsMTI0LjJBMTIsMTIsMCwwLDAsMjgsMTQ0djYwSDE2YTEyLDEyLDAsMCwwLDAsMjRIMjQwYTEyLDEyLDAsMCwwLDAtMjRaTTUyLDEyMS42NWw3Ni03Niw3Niw3NlYyMDRIMTY0VjE1MmExMiwxMiwwLDAsMC0xMi0xMkgxMDRhMTIsMTIsMCwwLDAtMTIsMTJ2NTJINTJaTTE0MCwyMDRIMTE2VjE2NGgyNFoiLz48L3N2Zz4=)
 */
export function PhHouseLineBoldIcon(props: PhHouseLineBoldIconProps) {
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
      <path d="M240,204H228V144a12,12,0,0,0,12.49-19.78L142.14,25.85a20,20,0,0,0-28.28,0L15.51,124.2A12,12,0,0,0,28,144v60H16a12,12,0,0,0,0,24H240a12,12,0,0,0,0-24ZM52,121.65l76-76,76,76V204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52ZM140,204H116V164h24Z"/>
    </svg>
  );
}
