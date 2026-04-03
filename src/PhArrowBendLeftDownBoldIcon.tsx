import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftDownBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTIsMzJhMTIsMTIsMCwwLDEtMTIsMTIsODQuMDksODQuMDksMCwwLDAtODQsODR2NjdsMjcuNTEtMjcuNTJhMTIsMTIsMCwwLDEsMTcsMTdsLTQ4LDQ4YTEyLDEyLDAsMCwxLTE3LDBsLTQ4LTQ4YTEyLDEyLDAsMCwxLDE3LTE3TDkyLDE5NVYxMjhBMTA4LjEyLDEwOC4xMiwwLDAsMSwyMDAsMjAsMTIsMTIsMCwwLDEsMjEyLDMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendLeftDownBoldIcon(props: PhArrowBendLeftDownBoldIconProps) {
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
      <path d="M212,32a12,12,0,0,1-12,12,84.09,84.09,0,0,0-84,84v67l27.51-27.52a12,12,0,0,1,17,17l-48,48a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17L92,195V128A108.12,108.12,0,0,1,200,20,12,12,0,0,1,212,32Z"/>
    </svg>
  );
}
