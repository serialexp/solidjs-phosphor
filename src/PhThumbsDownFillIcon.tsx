import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhThumbsDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzkuODIsMTU3bC0xMi05NkEyNCwyNCwwLDAsMCwyMDQsNDBIMzJBMTYsMTYsMCwwLDAsMTYsNTZ2ODhhMTYsMTYsMCwwLDAsMTYsMTZINzUuMDZsMzcuNzgsNzUuNThBOCw4LDAsMCwwLDEyMCwyNDBhNDAsNDAsMCwwLDAsNDAtNDBWMTg0aDU2YTI0LDI0LDAsMCwwLDIzLjgyLTI3Wk03MiwxNDRIMzJWNTZINzJaIi8+PC9zdmc+)
 */
export function PhThumbsDownFillIcon(props: PhThumbsDownFillIconProps) {
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
      <path d="M239.82,157l-12-96A24,24,0,0,0,204,40H32A16,16,0,0,0,16,56v88a16,16,0,0,0,16,16H75.06l37.78,75.58A8,8,0,0,0,120,240a40,40,0,0,0,40-40V184h56a24,24,0,0,0,23.82-27ZM72,144H32V56H72Z"/>
    </svg>
  );
}
