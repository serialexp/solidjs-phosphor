import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFileXThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTAuODMsODUuMTdsLTU2LTU2QTQsNCwwLDAsMCwxNTIsMjhINTZBMTIsMTIsMCwwLDAsNDQsNDBWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDIwMGExMiwxMiwwLDAsMCwxMi0xMlY4OEE0LDQsMCwwLDAsMjEwLjgzLDg1LjE3Wk0xNTYsNDEuNjUsMTk4LjM0LDg0SDE1NlpNMjAwLDIyMEg1NmE0LDQsMCwwLDEtNC00VjQwYTQsNCwwLDAsMSw0LTRoOTJWODhhNCw0LDAsMCwwLDQsNGg1MlYyMTZBNCw0LDAsMCwxLDIwMCwyMjBabS00NS4xNy04OS4xN0wxMzMuNjYsMTUybDIxLjE3LDIxLjE3YTQsNCwwLDAsMS01LjY2LDUuNjZMMTI4LDE1Ny42NmwtMjEuMTcsMjEuMTdhNCw0LDAsMCwxLTUuNjYtNS42NkwxMjIuMzQsMTUybC0yMS4xNy0yMS4xN2E0LDQsMCwxLDEsNS42Ni01LjY2TDEyOCwxNDYuMzRsMjEuMTctMjEuMTdhNCw0LDAsMSwxLDUuNjYsNS42NloiLz48L3N2Zz4=)
 */
export function PhFileXThinIcon(props: PhFileXThinIconProps) {
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
      <path d="M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-45.17-89.17L133.66,152l21.17,21.17a4,4,0,0,1-5.66,5.66L128,157.66l-21.17,21.17a4,4,0,0,1-5.66-5.66L122.34,152l-21.17-21.17a4,4,0,1,1,5.66-5.66L128,146.34l21.17-21.17a4,4,0,1,1,5.66,5.66Z"/>
    </svg>
  );
}
