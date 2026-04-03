import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartLineThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsMjA4YTQsNCwwLDAsMS00LDRIMzJhNCw0LDAsMCwxLTQtNFY0OGE0LDQsMCwwLDEsOCwwVjE1MS4xOUw5My4zNywxMDFhNCw0LDAsMCwxLDUtLjE5bDYxLjQxLDQ2LjA1TDIyMS4zNyw5M2E0LDQsMCwwLDEsNS4yNiw2bC02NCw1NmE0LDQsMCwwLDEtNSwuMTlsLTYxLjQxLTQ2TDM2LDE2MS44MVYyMDRIMjI0QTQsNCwwLDAsMSwyMjgsMjA4WiIvPjwvc3ZnPg==)
 */
export function PhChartLineThinIcon(props: PhChartLineThinIconProps) {
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
      <path d="M228,208a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V48a4,4,0,0,1,8,0V151.19L93.37,101a4,4,0,0,1,5-.19l61.41,46.05L221.37,93a4,4,0,0,1,5.26,6l-64,56a4,4,0,0,1-5,.19l-61.41-46L36,161.81V204H224A4,4,0,0,1,228,208Z"/>
    </svg>
  );
}
