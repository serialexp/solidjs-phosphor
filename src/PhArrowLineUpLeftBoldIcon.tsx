import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowLineUpLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzYsMjA4YTEyLDEyLDAsMCwxLTEyLDEySDQ4YTEyLDEyLDAsMCwxLDAtMjRIMjI0QTEyLDEyLDAsMCwxLDIzNiwyMDhaTTcyLDE1NmExMiwxMiwwLDAsMCwxMi0xMlY3N2w5MS41MSw5MS41MmExMiwxMiwwLDAsMCwxNy0xN0wxMDEsNjBoNjdhMTIsMTIsMCwwLDAsMC0yNEg3MkExMiwxMiwwLDAsMCw2MCw0OHY5NkExMiwxMiwwLDAsMCw3MiwxNTZaIi8+PC9zdmc+)
 */
export function PhArrowLineUpLeftBoldIcon(props: PhArrowLineUpLeftBoldIconProps) {
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
      <path d="M236,208a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24H224A12,12,0,0,1,236,208ZM72,156a12,12,0,0,0,12-12V77l91.51,91.52a12,12,0,0,0,17-17L101,60h67a12,12,0,0,0,0-24H72A12,12,0,0,0,60,48v96A12,12,0,0,0,72,156Z"/>
    </svg>
  );
}
