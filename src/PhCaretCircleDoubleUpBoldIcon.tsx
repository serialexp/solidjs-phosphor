import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretCircleDoubleUpBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQuNCw1MS42YTEwOCwxMDgsMCwxLDAsMCwxNTIuOEExMDguMTYsMTA4LjE2LDAsMCwwLDIwNC40LDUxLjZabS0xNywxMzUuODJhODQsODQsMCwxLDEsMC0xMTguODRBODQuMTIsODQuMTIsMCwwLDEsMTg3LjQyLDE4Ny40MlpNMTY4LjUsMTU5LjUzYTEyLDEyLDAsMCwxLTE3LDE3TDEyOCwxNTNsLTIzLjUzLDIzLjUzYTEyLDEyLDAsMCwxLTE3LTE3bDMyLTMyYTEyLDEyLDAsMCwxLDE3LDBabTAtNTZhMTIsMTIsMCwxLDEtMTcsMTdMMTI4LDk3bC0yMy41MywyMy41MmExMiwxMiwwLDEsMS0xNy0xN2wzMi0zMmExMiwxMiwwLDAsMSwxNywwWiIvPjwvc3ZnPg==)
 */
export function PhCaretCircleDoubleUpBoldIcon(props: PhCaretCircleDoubleUpBoldIconProps) {
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
      <path d="M204.4,51.6a108,108,0,1,0,0,152.8A108.16,108.16,0,0,0,204.4,51.6Zm-17,135.82a84,84,0,1,1,0-118.84A84.12,84.12,0,0,1,187.42,187.42ZM168.5,159.53a12,12,0,0,1-17,17L128,153l-23.53,23.53a12,12,0,0,1-17-17l32-32a12,12,0,0,1,17,0Zm0-56a12,12,0,1,1-17,17L128,97l-23.53,23.52a12,12,0,1,1-17-17l32-32a12,12,0,0,1,17,0Z"/>
    </svg>
  );
}
