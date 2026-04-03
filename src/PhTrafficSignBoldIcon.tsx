import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrafficSignBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDYsMTEzLjQ2LDE0Mi41NCwxMGEyMC41NywyMC41NywwLDAsMC0yOS4wOCwwTDEwLDExMy40NmEyMC41NywyMC41NywwLDAsMCwwLDI5LjA4TDExMy40NiwyNDZoMGEyMC41NywyMC41NywwLDAsMCwyOS4wOCwwTDI0NiwxNDIuNTRhMjAuNTcsMjAuNTcsMCwwLDAsMC0yOS4wOFpNMTI4LDIyNi41NywyOS40MywxMjgsMTI4LDI5LjQzLDIyNi41NywxMjhabTcuNTEtMTIyLjA4YTEyLDEyLDAsMCwxLDE3LTE3bDI0LDI0YTEyLDEyLDAsMCwxLDAsMTdsLTI0LDI0YTEyLDEyLDAsMCwxLTE3LTE3TDEzOSwxMzJIMTEyYTEyLDEyLDAsMCwwLTEyLDEydjRhMTIsMTIsMCwwLDEtMjQsMHYtNGEzNiwzNiwwLDAsMSwzNi0zNmgyN1oiLz48L3N2Zz4=)
 */
export function PhTrafficSignBoldIcon(props: PhTrafficSignBoldIconProps) {
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
      <path d="M246,113.46,142.54,10a20.57,20.57,0,0,0-29.08,0L10,113.46a20.57,20.57,0,0,0,0,29.08L113.46,246h0a20.57,20.57,0,0,0,29.08,0L246,142.54a20.57,20.57,0,0,0,0-29.08ZM128,226.57,29.43,128,128,29.43,226.57,128Zm7.51-122.08a12,12,0,0,1,17-17l24,24a12,12,0,0,1,0,17l-24,24a12,12,0,0,1-17-17L139,132H112a12,12,0,0,0-12,12v4a12,12,0,0,1-24,0v-4a36,36,0,0,1,36-36h27Z"/>
    </svg>
  );
}
