import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNotionLogoIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDBIMTY4YTgsOCwwLDAsMCwwLDE2aDE2VjE3Ni44NUwxMTEsNDQuMTRBOCw4LDAsMCwwLDEwNCw0MEg0MGE4LDgsMCwwLDAsMCwxNkg1NlYyMDBINDBhOCw4LDAsMCwwLDAsMTZIODhhOCw4LDAsMCwwLDAtMTZINzJWNzkuMTVsNzMsMTMyLjcxYTgsOCwwLDAsMCw3LDQuMTRoNDBhOCw4LDAsMCwwLDgtOFY1NmgxNmE4LDgsMCwwLDAsMC0xNlpNNzcuNTMsNTZIOTkuMjdsNzkuMiwxNDRIMTU2LjczWiIvPjwvc3ZnPg==)
 */
export function PhNotionLogoIcon(props: PhNotionLogoIconProps) {
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
      <path d="M216,40H168a8,8,0,0,0,0,16h16V176.85L111,44.14A8,8,0,0,0,104,40H40a8,8,0,0,0,0,16H56V200H40a8,8,0,0,0,0,16H88a8,8,0,0,0,0-16H72V79.15l73,132.71a8,8,0,0,0,7,4.14h40a8,8,0,0,0,8-8V56h16a8,8,0,0,0,0-16ZM77.53,56H99.27l79.2,144H156.73Z"/>
    </svg>
  );
}
