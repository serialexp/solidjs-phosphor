import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhWaveSquareBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTI4djU2YTEyLDEyLDAsMCwxLTEyLDEySDEyOGExMiwxMiwwLDAsMS0xMi0xMlY4NEgzNnY0NGExMiwxMiwwLDAsMS0yNCwwVjcyQTEyLDEyLDAsMCwxLDI0LDYwSDEyOGExMiwxMiwwLDAsMSwxMiwxMlYxNzJoODBWMTI4YTEyLDEyLDAsMCwxLDI0LDBaIi8+PC9zdmc+)
 */
export function PhWaveSquareBoldIcon(props: PhWaveSquareBoldIconProps) {
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
      <path d="M244,128v56a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V84H36v44a12,12,0,0,1-24,0V72A12,12,0,0,1,24,60H128a12,12,0,0,1,12,12V172h80V128a12,12,0,0,1,24,0Z"/>
    </svg>
  );
}
