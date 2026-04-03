import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitPullRequestBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDgsNjRBMzYsMzYsMCwxLDAsNjAsOTcuOTR2NjAuMTJhMzYsMzYsMCwxLDAsMjQsMFY5Ny45NEEzNi4wNywzNi4wNywwLDAsMCwxMDgsNjRaTTcyLDUyQTEyLDEyLDAsMSwxLDYwLDY0LDEyLDEyLDAsMCwxLDcyLDUyWm0wLDE1MmExMiwxMiwwLDEsMSwxMi0xMkExMiwxMiwwLDAsMSw3MiwyMDRabTE0MC00NS45NFYxMTAuNjNhMjcuODEsMjcuODEsMCwwLDAtOC4yLTE5LjhMMTczLDYwaDE5YTEyLDEyLDAsMCwwLDAtMjRIMTQ0YTEyLDEyLDAsMCwwLTEyLDEyVjk2YTEyLDEyLDAsMCwwLDI0LDBWNzdsMzAuODMsMzAuODNhNCw0LDAsMCwxLDEuMTcsMi44M3Y0Ny40M2EzNiwzNiwwLDEsMCwyNCwwWk0yMDAsMjA0YTEyLDEyLDAsMSwxLDEyLTEyQTEyLDEyLDAsMCwxLDIwMCwyMDRaIi8+PC9zdmc+)
 */
export function PhGitPullRequestBoldIcon(props: PhGitPullRequestBoldIconProps) {
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
      <path d="M108,64A36,36,0,1,0,60,97.94v60.12a36,36,0,1,0,24,0V97.94A36.07,36.07,0,0,0,108,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204Zm140-45.94V110.63a27.81,27.81,0,0,0-8.2-19.8L173,60h19a12,12,0,0,0,0-24H144a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V77l30.83,30.83a4,4,0,0,1,1.17,2.83v47.43a36,36,0,1,0,24,0ZM200,204a12,12,0,1,1,12-12A12,12,0,0,1,200,204Z"/>
    </svg>
  );
}
