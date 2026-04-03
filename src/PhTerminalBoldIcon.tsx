import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTerminalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjAsMTM3LDQ4LDIwMUExMiwxMiwwLDEsMSwzMiwxODNsNjEuOTEtNTVMMzIsNzNBMTIsMTIsMCwxLDEsNDgsNTVsNzIsNjRBMTIsMTIsMCwwLDEsMTIwLDEzN1ptOTYsNDNIMTIwYTEyLDEyLDAsMCwwLDAsMjRoOTZhMTIsMTIsMCwwLDAsMC0yNFoiLz48L3N2Zz4=)
 */
export function PhTerminalBoldIcon(props: PhTerminalBoldIconProps) {
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
      <path d="M120,137,48,201A12,12,0,1,1,32,183l61.91-55L32,73A12,12,0,1,1,48,55l72,64A12,12,0,0,1,120,137Zm96,43H120a12,12,0,0,0,0,24h96a12,12,0,0,0,0-24Z"/>
    </svg>
  );
}
