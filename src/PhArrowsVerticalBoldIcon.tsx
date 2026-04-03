import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowsVerticalBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjguNDksMTkxLjUxYTEyLDEyLDAsMCwxLDAsMTdsLTMyLDMyYTEyLDEyLDAsMCwxLTE3LDBsLTMyLTMyYTEyLDEyLDAsMCwxLDE3LTE3TDExNiwyMDNWNTNMMTA0LjQ5LDY0LjQ5YTEyLDEyLDAsMSwxLTE3LTE3bDMyLTMyYTEyLDEyLDAsMCwxLDE3LDBsMzIsMzJhMTIsMTIsMCwwLDEtMTcsMTdMMTQwLDUzVjIwM2wxMS41MS0xMS41MkExMiwxMiwwLDAsMSwxNjguNDksMTkxLjUxWiIvPjwvc3ZnPg==)
 */
export function PhArrowsVerticalBoldIcon(props: PhArrowsVerticalBoldIconProps) {
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
      <path d="M168.49,191.51a12,12,0,0,1,0,17l-32,32a12,12,0,0,1-17,0l-32-32a12,12,0,0,1,17-17L116,203V53L104.49,64.49a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L140,53V203l11.51-11.52A12,12,0,0,1,168.49,191.51Z"/>
    </svg>
  );
}
