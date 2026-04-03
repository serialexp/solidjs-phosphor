import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGitCommitBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDQsMTE2SDE4Ni43OWE2MCw2MCwwLDAsMC0xMTcuNTgsMEgxMmExMiwxMiwwLDAsMCwwLDI0SDY5LjIxYTYwLDYwLDAsMCwwLDExNy41OCwwSDI0NGExMiwxMiwwLDAsMCwwLTI0Wk0xMjgsMTY0YTM2LDM2LDAsMSwxLDM2LTM2QTM2LDM2LDAsMCwxLDEyOCwxNjRaIi8+PC9zdmc+)
 */
export function PhGitCommitBoldIcon(props: PhGitCommitBoldIconProps) {
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
      <path d="M244,116H186.79a60,60,0,0,0-117.58,0H12a12,12,0,0,0,0,24H69.21a60,60,0,0,0,117.58,0H244a12,12,0,0,0,0-24ZM128,164a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"/>
    </svg>
  );
}
