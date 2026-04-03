import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveformSlashLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01NCw5NnY2NGE2LDYsMCwwLDEtMTIsMFY5NmE2LDYsMCwwLDEsMTIsMFpNNTIuNDQsMzZBNiw2LDAsMCwwLDQzLjU2LDQ0TDgyLDg2LjMyVjIyNGE2LDYsMCwwLDAsMTIsMFY5OS41MmwyOCwzMC44VjE5MmE2LDYsMCwwLDAsMTIsMFYxNDMuNTJMMjAzLjU2LDIyMGE2LDYsMCwwLDAsOC44OC04LjA4Wk04OCw0Mi40M2E2LDYsMCwwLDAsNi02VjMyYTYsNiwwLDAsMC0xMiwwdjQuNDNBNiw2LDAsMCwwLDg4LDQyLjQzWm00MCw0NGE2LDYsMCwwLDAsNi02VjY0YTYsNiwwLDAsMC0xMiwwVjgwLjQzQTYsNiwwLDAsMCwxMjgsODYuNDNabTQwLDQ0YTYsNiwwLDAsMCw2LTZWOTZhNiw2LDAsMCwwLTEyLDB2MjguNDNBNiw2LDAsMCwwLDE2OCwxMzAuNDNaTTIwOCw3NGE2LDYsMCwwLDAtNiw2djg4LjQzYTYsNiwwLDAsMCwxMiwwVjgwQTYsNiwwLDAsMCwyMDgsNzRaIi8+PC9zdmc+)
 */
export function PhWaveformSlashLightIcon(props: PhWaveformSlashLightIconProps) {
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
      <path d="M54,96v64a6,6,0,0,1-12,0V96a6,6,0,0,1,12,0ZM52.44,36A6,6,0,0,0,43.56,44L82,86.32V224a6,6,0,0,0,12,0V99.52l28,30.8V192a6,6,0,0,0,12,0V143.52L203.56,220a6,6,0,0,0,8.88-8.08ZM88,42.43a6,6,0,0,0,6-6V32a6,6,0,0,0-12,0v4.43A6,6,0,0,0,88,42.43Zm40,44a6,6,0,0,0,6-6V64a6,6,0,0,0-12,0V80.43A6,6,0,0,0,128,86.43Zm40,44a6,6,0,0,0,6-6V96a6,6,0,0,0-12,0v28.43A6,6,0,0,0,168,130.43ZM208,74a6,6,0,0,0-6,6v88.43a6,6,0,0,0,12,0V80A6,6,0,0,0,208,74Z"/>
    </svg>
  );
}
