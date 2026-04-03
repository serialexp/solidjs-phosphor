import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGenderFemaleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsOTZhODQsODQsMCwxLDAtOTYsODMuMTNWMTk2SDg4YTEyLDEyLDAsMCwwLDAsMjRoMjh2MjBhMTIsMTIsMCwwLDAsMjQsMFYyMjBoMjhhMTIsMTIsMCwwLDAsMC0yNEgxNDBWMTc5LjEzQTg0LjEyLDg0LjEyLDAsMCwwLDIxMiw5NlpNNjgsOTZhNjAsNjAsMCwxLDEsNjAsNjBBNjAuMDcsNjAuMDcsMCwwLDEsNjgsOTZaIi8+PC9zdmc+)
 */
export function PhGenderFemaleBoldIcon(props: PhGenderFemaleBoldIconProps) {
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
      <path d="M212,96a84,84,0,1,0-96,83.13V196H88a12,12,0,0,0,0,24h28v20a12,12,0,0,0,24,0V220h28a12,12,0,0,0,0-24H140V179.13A84.12,84.12,0,0,0,212,96ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z"/>
    </svg>
  );
}
