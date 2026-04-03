import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitForkBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjgsNjRhMzYsMzYsMCwxLDAtNDgsMzMuOTRWMTEyYTQsNCwwLDAsMS00LDRIODBhNCw0LDAsMCwxLTQtNFY5Ny45NGEzNiwzNiwwLDEsMC0yNCwwVjExMmEyOCwyOCwwLDAsMCwyOCwyOGgzNnYxOC4wNmEzNiwzNiwwLDEsMCwyNCwwVjE0MGgzNmEyOCwyOCwwLDAsMCwyOC0yOFY5Ny45NEEzNi4wNywzNi4wNywwLDAsMCwyMjgsNjRaTTY0LDUyQTEyLDEyLDAsMSwxLDUyLDY0LDEyLDEyLDAsMCwxLDY0LDUyWm02NCwxNTJhMTIsMTIsMCwxLDEsMTItMTJBMTIsMTIsMCwwLDEsMTI4LDIwNFpNMTkyLDc2YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDE5Miw3NloiLz48L3N2Zz4=)
 */
export function PhGitForkBoldIcon(props: PhGitForkBoldIconProps) {
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
      <path d="M228,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V97.94a36,36,0,1,0-24,0V112a28,28,0,0,0,28,28h36v18.06a36,36,0,1,0,24,0V140h36a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,228,64ZM64,52A12,12,0,1,1,52,64,12,12,0,0,1,64,52Zm64,152a12,12,0,1,1,12-12A12,12,0,0,1,128,204ZM192,76a12,12,0,1,1,12-12A12,12,0,0,1,192,76Z"/>
    </svg>
  );
}
