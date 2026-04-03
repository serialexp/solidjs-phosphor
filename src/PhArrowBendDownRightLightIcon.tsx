import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownRightLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjguMjQsMTU2LjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OC04LjQ4TDIwOS41MSwxNThIMTI4QTEwMi4xMiwxMDIuMTIsMCwwLDEsMjYsNTZhNiw2LDAsMCwxLDEyLDAsOTAuMSw5MC4xLDAsMCwwLDkwLDkwaDgxLjUxbC0zNy43NS0zNy43NmE2LDYsMCwwLDEsOC40OC04LjQ4bDQ4LDQ4QTYsNiwwLDAsMSwyMjguMjQsMTU2LjI0WiIvPjwvc3ZnPg==)
 */
export function PhArrowBendDownRightLightIcon(props: PhArrowBendDownRightLightIconProps) {
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
      <path d="M228.24,156.24l-48,48a6,6,0,0,1-8.48-8.48L209.51,158H128A102.12,102.12,0,0,1,26,56a6,6,0,0,1,12,0,90.1,90.1,0,0,0,90,90h81.51l-37.75-37.76a6,6,0,0,1,8.48-8.48l48,48A6,6,0,0,1,228.24,156.24Z"/>
    </svg>
  );
}
