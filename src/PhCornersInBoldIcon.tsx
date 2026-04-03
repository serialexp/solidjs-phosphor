import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCornersInBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDgsOTZWNDhhMTIsMTIsMCwwLDEsMjQsMFY4NGgzNmExMiwxMiwwLDAsMSwwLDI0SDE2MEExMiwxMiwwLDAsMSwxNDgsOTZaTTk2LDE0OEg0OGExMiwxMiwwLDAsMCwwLDI0SDg0djM2YTEyLDEyLDAsMCwwLDI0LDBWMTYwQTEyLDEyLDAsMCwwLDk2LDE0OFptMTEyLDBIMTYwYTEyLDEyLDAsMCwwLTEyLDEydjQ4YTEyLDEyLDAsMCwwLDI0LDBWMTcyaDM2YTEyLDEyLDAsMCwwLDAtMjRaTTk2LDM2QTEyLDEyLDAsMCwwLDg0LDQ4Vjg0SDQ4YTEyLDEyLDAsMCwwLDAsMjRIOTZhMTIsMTIsMCwwLDAsMTItMTJWNDhBMTIsMTIsMCwwLDAsOTYsMzZaIi8+PC9zdmc+)
 */
export function PhCornersInBoldIcon(props: PhCornersInBoldIconProps) {
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
      <path d="M148,96V48a12,12,0,0,1,24,0V84h36a12,12,0,0,1,0,24H160A12,12,0,0,1,148,96ZM96,148H48a12,12,0,0,0,0,24H84v36a12,12,0,0,0,24,0V160A12,12,0,0,0,96,148Zm112,0H160a12,12,0,0,0-12,12v48a12,12,0,0,0,24,0V172h36a12,12,0,0,0,0-24ZM96,36A12,12,0,0,0,84,48V84H48a12,12,0,0,0,0,24H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Z"/>
    </svg>
  );
}
