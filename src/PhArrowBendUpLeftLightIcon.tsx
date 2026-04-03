import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendUpLeftLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzAsMjAwYTYsNiwwLDAsMS0xMiwwLDkwLjEsOTAuMSwwLDAsMC05MC05MEg0Ni40OWwzNy43NSwzNy43NmE2LDYsMCwxLDEtOC40OCw4LjQ4bC00OC00OGE2LDYsMCwwLDEsMC04LjQ4bDQ4LTQ4YTYsNiwwLDAsMSw4LjQ4LDguNDhMNDYuNDksOThIMTI4QTEwMi4xMiwxMDIuMTIsMCwwLDEsMjMwLDIwMFoiLz48L3N2Zz4=)
 */
export function PhArrowBendUpLeftLightIcon(props: PhArrowBendUpLeftLightIconProps) {
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
      <path d="M230,200a6,6,0,0,1-12,0,90.1,90.1,0,0,0-90-90H46.49l37.75,37.76a6,6,0,1,1-8.48,8.48l-48-48a6,6,0,0,1,0-8.48l48-48a6,6,0,0,1,8.48,8.48L46.49,98H128A102.12,102.12,0,0,1,230,200Z"/>
    </svg>
  );
}
