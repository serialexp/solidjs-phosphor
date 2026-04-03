import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyGbpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTIsMjA4YTgsOCwwLDAsMS04LDhINTZhOCw4LDAsMCwxLDAtMTZoNGEyOCwyOCwwLDAsMCwyOC0yOFYxMzZINTZhOCw4LDAsMCwxLDAtMTZIODhWODRhNTIsNTIsMCwwLDEsODUuMDgtNDAuMTJBOCw4LDAsMSwxLDE2Mi45LDU2LjIyLDM2LDM2LDAsMCwwLDEwNCw4NHYzNmgzMmE4LDgsMCwwLDEsMCwxNkgxMDR2MzZhNDMuODIsNDMuODIsMCwwLDEtMTAuMDgsMjhIMTg0QTgsOCwwLDAsMSwxOTIsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhCurrencyGbpIcon(props: PhCurrencyGbpIconProps) {
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
      <path d="M192,208a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h4a28,28,0,0,0,28-28V136H56a8,8,0,0,1,0-16H88V84a52,52,0,0,1,85.08-40.12A8,8,0,1,1,162.9,56.22,36,36,0,0,0,104,84v36h32a8,8,0,0,1,0,16H104v36a43.82,43.82,0,0,1-10.08,28H184A8,8,0,0,1,192,208Z"/>
    </svg>
  );
}
