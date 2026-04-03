import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAlignLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01Miw0MFYyMTZhMTIsMTIsMCwwLDEtMjQsMFY0MGExMiwxMiwwLDAsMSwyNCwwWm0xNiw2MFY2NEEyMCwyMCwwLDAsMSw4OCw0NGg4OGEyMCwyMCwwLDAsMSwyMCwyMHYzNmEyMCwyMCwwLDAsMS0yMCwyMEg4OEEyMCwyMCwwLDAsMSw2OCwxMDBabTI0LTRoODBWNjhIOTJabTE0NCw2MHYzNmEyMCwyMCwwLDAsMS0yMCwyMEg4OGEyMCwyMCwwLDAsMS0yMC0yMFYxNTZhMjAsMjAsMCwwLDEsMjAtMjBIMjE2QTIwLDIwLDAsMCwxLDIzNiwxNTZabS0yNCw0SDkydjI4SDIxMloiLz48L3N2Zz4=)
 */
export function PhAlignLeftBoldIcon(props: PhAlignLeftBoldIconProps) {
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
      <path d="M52,40V216a12,12,0,0,1-24,0V40a12,12,0,0,1,24,0Zm16,60V64A20,20,0,0,1,88,44h88a20,20,0,0,1,20,20v36a20,20,0,0,1-20,20H88A20,20,0,0,1,68,100Zm24-4h80V68H92Zm144,60v36a20,20,0,0,1-20,20H88a20,20,0,0,1-20-20V156a20,20,0,0,1,20-20H216A20,20,0,0,1,236,156Zm-24,4H92v28H212Z"/>
    </svg>
  );
}
