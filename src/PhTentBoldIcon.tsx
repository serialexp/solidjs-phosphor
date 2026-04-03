import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTentBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNTUsMTg3LjEzbC02NC0xNDRBMTIsMTIsMCwwLDAsMTgwLDM2SDc2YTEyLDEyLDAsMCwwLTEwLjg1LDYuOSwyLjQyLDIuNDIsMCwwLDAtLjEyLjIzTDY1LDQzLjNhLjA4LjA4LDAsMCwwLDAsMEwxLDE4Ny4xM0ExMiwxMiwwLDAsMCwxMiwyMDRIMjQ0YTEyLDEyLDAsMCwwLDExLTE2Ljg3Wk02NCwxMDQuNTVWMTgwSDMwLjQ2Wk04OCwxODBWMTA0LjU1TDEyMS41NCwxODBabTU5LjgsMEw5NC40Nyw2MEgxNzIuMmw1My4zNCwxMjBaIi8+PC9zdmc+)
 */
export function PhTentBoldIcon(props: PhTentBoldIconProps) {
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
      <path d="M255,187.13l-64-144A12,12,0,0,0,180,36H76a12,12,0,0,0-10.85,6.9,2.42,2.42,0,0,0-.12.23L65,43.3a.08.08,0,0,0,0,0L1,187.13A12,12,0,0,0,12,204H244a12,12,0,0,0,11-16.87ZM64,104.55V180H30.46ZM88,180V104.55L121.54,180Zm59.8,0L94.47,60H172.2l53.34,120Z"/>
    </svg>
  );
}
