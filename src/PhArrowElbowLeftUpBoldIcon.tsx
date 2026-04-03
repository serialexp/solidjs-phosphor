import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowElbowLeftUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTkyYTEyLDEyLDAsMCwxLTEyLDEySDg4YTEyLDEyLDAsMCwxLTEyLTEyVjc3TDQ4LjQ5LDEwNC40OWExMiwxMiwwLDAsMS0xNy0xN2w0OC00OGExMiwxMiwwLDAsMSwxNywwbDQ4LDQ4YTEyLDEyLDAsMCwxLTE3LDE3TDEwMCw3N1YxODBIMjMyQTEyLDEyLDAsMCwxLDI0NCwxOTJaIi8+PC9zdmc+)
 */
export function PhArrowElbowLeftUpBoldIcon(props: PhArrowElbowLeftUpBoldIconProps) {
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
      <path d="M244,192a12,12,0,0,1-12,12H88a12,12,0,0,1-12-12V77L48.49,104.49a12,12,0,0,1-17-17l48-48a12,12,0,0,1,17,0l48,48a12,12,0,0,1-17,17L100,77V180H232A12,12,0,0,1,244,192Z"/>
    </svg>
  );
}
