import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendRightDownLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuMjQsMTgwLjI0bC00OCw0OGE2LDYsMCwwLDEtOC40OCwwbC00OC00OGE2LDYsMCwwLDEsOC40OC04LjQ4TDE0NiwyMDkuNTFWMTI4QTkwLjEsOTAuMSwwLDAsMCw1NiwzOGE2LDYsMCwwLDEsMC0xMkExMDIuMTIsMTAyLjEyLDAsMCwxLDE1OCwxMjh2ODEuNTFsMzcuNzYtMzcuNzVhNiw2LDAsMCwxLDguNDgsOC40OFoiLz48L3N2Zz4=)
 */
export function PhArrowBendRightDownLightIcon(props: PhArrowBendRightDownLightIconProps) {
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
      <path d="M204.24,180.24l-48,48a6,6,0,0,1-8.48,0l-48-48a6,6,0,0,1,8.48-8.48L146,209.51V128A90.1,90.1,0,0,0,56,38a6,6,0,0,1,0-12A102.12,102.12,0,0,1,158,128v81.51l37.76-37.75a6,6,0,0,1,8.48,8.48Z"/>
    </svg>
  );
}
