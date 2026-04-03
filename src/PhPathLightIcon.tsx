import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPathLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAsMTcwYTMwLjA1LDMwLjA1LDAsMCwwLTI5LjQsMjRINzJhMzQsMzQsMCwwLDEsMC02OGg5NmEzOCwzOCwwLDAsMCwwLTc2SDcyYTYsNiwwLDAsMCwwLDEyaDk2YTI2LDI2LDAsMCwxLDAsNTJINzJhNDYsNDYsMCwwLDAsMCw5Mmg5OC42QTMwLDMwLDAsMSwwLDIwMCwxNzBabTAsNDhhMTgsMTgsMCwxLDEsMTgtMThBMTgsMTgsMCwwLDEsMjAwLDIxOFoiLz48L3N2Zz4=)
 */
export function PhPathLightIcon(props: PhPathLightIconProps) {
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
      <path d="M200,170a30.05,30.05,0,0,0-29.4,24H72a34,34,0,0,1,0-68h96a38,38,0,0,0,0-76H72a6,6,0,0,0,0,12h96a26,26,0,0,1,0,52H72a46,46,0,0,0,0,92h98.6A30,30,0,1,0,200,170Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,200,218Z"/>
    </svg>
  );
}
