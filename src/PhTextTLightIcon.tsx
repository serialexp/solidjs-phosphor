import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextTLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDYsNTZWODhhNiw2LDAsMCwxLTEyLDBWNjJIMTM0VjE5NGgyNmE2LDYsMCwwLDEsMCwxMkg5NmE2LDYsMCwwLDEsMC0xMmgyNlY2Mkg2MlY4OGE2LDYsMCwwLDEtMTIsMFY1NmE2LDYsMCwwLDEsNi02SDIwMEE2LDYsMCwwLDEsMjA2LDU2WiIvPjwvc3ZnPg==)
 */
export function PhTextTLightIcon(props: PhTextTLightIconProps) {
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
      <path d="M206,56V88a6,6,0,0,1-12,0V62H134V194h26a6,6,0,0,1,0,12H96a6,6,0,0,1,0-12h26V62H62V88a6,6,0,0,1-12,0V56a6,6,0,0,1,6-6H200A6,6,0,0,1,206,56Z"/>
    </svg>
  );
}
