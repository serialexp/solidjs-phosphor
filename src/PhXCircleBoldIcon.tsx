import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhXCircleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjguNDksMTA0LjQ5LDE0NSwxMjhsMjMuNTIsMjMuNTFhMTIsMTIsMCwwLDEtMTcsMTdMMTI4LDE0NWwtMjMuNTEsMjMuNTJhMTIsMTIsMCwwLDEtMTctMTdMMTExLDEyOCw4Ny41MSwxMDQuNDlhMTIsMTIsMCwwLDEsMTctMTdMMTI4LDExMWwyMy41MS0yMy41MmExMiwxMiwwLDAsMSwxNywxN1pNMjM2LDEyOEExMDgsMTA4LDAsMSwxLDEyOCwyMCwxMDguMTIsMTA4LjEyLDAsMCwxLDIzNiwxMjhabS0yNCwwYTg0LDg0LDAsMSwwLTg0LDg0QTg0LjA5LDg0LjA5LDAsMCwwLDIxMiwxMjhaIi8+PC9zdmc+)
 */
export function PhXCircleBoldIcon(props: PhXCircleBoldIconProps) {
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
      <path d="M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"/>
    </svg>
  );
}
