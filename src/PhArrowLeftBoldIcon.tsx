import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMTI4YTEyLDEyLDAsMCwxLTEyLDEySDY5bDUxLjUyLDUxLjUxYTEyLDEyLDAsMCwxLTE3LDE3bC03Mi03MmExMiwxMiwwLDAsMSwwLTE3bDcyLTcyYTEyLDEyLDAsMCwxLDE3LDE3TDY5LDExNkgyMTZBMTIsMTIsMCwwLDEsMjI4LDEyOFoiLz48L3N2Zz4=)
 */
export function PhArrowLeftBoldIcon(props: PhArrowLeftBoldIconProps) {
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
      <path d="M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"/>
    </svg>
  );
}
