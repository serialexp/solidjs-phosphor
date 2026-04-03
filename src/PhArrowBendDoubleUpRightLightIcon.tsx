import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDoubleUpRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTA4LjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OC04LjQ4TDIxNS41MSwxMDQsMTcxLjc2LDYwLjI0YTYsNiwwLDAsMSw4LjQ4LTguNDhsNDgsNDhBNiw2LDAsMCwxLDIyOC4yNCwxMDguMjRabS00OC04LjQ4LTQ4LTQ4YTYsNiwwLDEsMC04LjQ4LDguNDhMMTYxLjUxLDk4SDEyOEExMDIuMTIsMTAyLjEyLDAsMCwwLDI2LDIwMGE2LDYsMCwwLDAsMTIsMCw5MC4xLDkwLjEsMCwwLDEsOTAtOTBoMzMuNTFsLTM3Ljc1LDM3Ljc2YTYsNiwwLDEsMCw4LjQ4LDguNDhsNDgtNDhBNiw2LDAsMCwwLDE4MC4yNCw5OS43NloiLz48L3N2Zz4=)
 */
export function PhArrowBendDoubleUpRightLightIcon(props: PhArrowBendDoubleUpRightLightIconProps) {
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
      <path d="M228.24,108.24l-48,48a6,6,0,0,1-8.48-8.48L215.51,104,171.76,60.24a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,108.24Zm-48-8.48-48-48a6,6,0,1,0-8.48,8.48L161.51,98H128A102.12,102.12,0,0,0,26,200a6,6,0,0,0,12,0,90.1,90.1,0,0,1,90-90h33.51l-37.75,37.76a6,6,0,1,0,8.48,8.48l48-48A6,6,0,0,0,180.24,99.76Z"/>
    </svg>
  );
}
