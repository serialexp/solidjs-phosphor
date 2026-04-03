import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuNCw1MS42YTEwOCwxMDgsMCwxLDAsMCwxNTIuOEExMDguMTYsMTA4LjE2LDAsMCwwLDIwNC40LDUxLjZabS0xNywxMzUuODJhODQsODQsMCwxLDEsMC0xMTguODRBODQuMTIsODQuMTIsMCwwLDEsMTg3LjQyLDE4Ny40MlptLTEwLjkxLTgyLjk1TDE1MywxMjhsMjMuNTMsMjMuNTNhMTIsMTIsMCwxLDEtMTcsMTdsLTMyLTMyYTEyLDEyLDAsMCwxLDAtMTdsMzItMzJhMTIsMTIsMCwwLDEsMTcsMTdabS01NiwwTDk3LDEyOGwyMy41MiwyMy41M2ExMiwxMiwwLDEsMS0xNywxN2wtMzItMzJhMTIsMTIsMCwwLDEsMC0xN2wzMi0zMmExMiwxMiwwLDEsMSwxNywxN1oiLz48L3N2Zz4=)
 */
export function PhCaretCircleDoubleLeftBoldIcon(props: PhCaretCircleDoubleLeftBoldIconProps) {
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
      <path d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42Zm-10.91-82.95L153,128l23.53,23.53a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17Zm-56,0L97,128l23.52,23.53a12,12,0,1,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,1,1,17,17Z"/>
    </svg>
  );
}
