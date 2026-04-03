import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhShieldChevronFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsNDBINDhBMTYsMTYsMCwwLDAsMzIsNTZ2NTZjMCw1Mi43MiwyNS41Miw4NC42Nyw0Ni45MywxMDIuMTksMjMuMDYsMTguODYsNDYsMjUuMjYsNDcsMjUuNTNhOCw4LDAsMCwwLDQuMiwwYzEtLjI3LDIzLjkxLTYuNjcsNDctMjUuNTNDMTk4LjQ4LDE5Ni42NywyMjQsMTY0LjcyLDIyNCwxMTJWNTZBMTYsMTYsMCwwLDAsMjA4LDQwWm0wLDcycTAsMjYuMzEtOS4xNCw0Ny44NGwtNjYuMjctNDYuMzlhOCw4LDAsMCwwLTkuMTgsMEw1Ny4xMywxNTkuODRDNTEuMDYsMTQ1LjUyLDQ4LDEyOS41NCw0OCwxMTJsMC01NiwxNjAsMFoiLz48L3N2Zz4=)
 */
export function PhShieldChevronFillIcon(props: PhShieldChevronFillIconProps) {
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
      <path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72q0,26.31-9.14,47.84l-66.27-46.39a8,8,0,0,0-9.18,0L57.13,159.84C51.06,145.52,48,129.54,48,112l0-56,160,0Z"/>
    </svg>
  );
}
