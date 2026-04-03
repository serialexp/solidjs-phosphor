import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowSquareUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMjhINDhBMjAsMjAsMCwwLDAsMjgsNDhWMjA4YTIwLDIwLDAsMCwwLDIwLDIwSDIwOGEyMCwyMCwwLDAsMCwyMC0yMFY0OEEyMCwyMCwwLDAsMCwyMDgsMjhabS00LDE3Nkg1MlY1MkgyMDRaTTg3LjUxLDEyOC40OWExMiwxMiwwLDAsMSwwLTE3bDMyLTMyYTEyLDEyLDAsMCwxLDE3LDBsMzIsMzJhMTIsMTIsMCwwLDEtMTcsMTdMMTQwLDExN3Y1MWExMiwxMiwwLDAsMS0yNCwwVjExN2wtMTEuNTEsMTEuNTJBMTIsMTIsMCwwLDEsODcuNTEsMTI4LjQ5WiIvPjwvc3ZnPg==)
 */
export function PhArrowSquareUpBoldIcon(props: PhArrowSquareUpBoldIconProps) {
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
      <path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,128.49a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,0l32,32a12,12,0,0,1-17,17L140,117v51a12,12,0,0,1-24,0V117l-11.51,11.52A12,12,0,0,1,87.51,128.49Z"/>
    </svg>
  );
}
