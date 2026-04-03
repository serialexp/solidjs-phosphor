import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhXBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDguNDksMTkxLjUxYTEyLDEyLDAsMCwxLTE3LDE3TDEyOCwxNDUsNjQuNDksMjA4LjQ5YTEyLDEyLDAsMCwxLTE3LTE3TDExMSwxMjgsNDcuNTEsNjQuNDlhMTIsMTIsMCwwLDEsMTctMTdMMTI4LDExMWw2My41MS02My41MmExMiwxMiwwLDAsMSwxNywxN0wxNDUsMTI4WiIvPjwvc3ZnPg==)
 */
export function PhXBoldIcon(props: PhXBoldIconProps) {
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
      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/>
    </svg>
  );
}
