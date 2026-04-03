import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFlagPennantThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDEuMzEsMTAwLjIybC0xODQtNjRBNCw0LDAsMCwwLDUyLDQwVjIxNmE0LDQsMCwwLDAsOCwwVjE3MC44NGwxODEuMzEtNjMuMDZhNCw0LDAsMCwwLDAtNy41NlpNNjAsMTYyLjM3VjQ1LjYzTDIyNy44MiwxMDRaIi8+PC9zdmc+)
 */
export function PhFlagPennantThinIcon(props: PhFlagPennantThinIconProps) {
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
      <path d="M241.31,100.22l-184-64A4,4,0,0,0,52,40V216a4,4,0,0,0,8,0V170.84l181.31-63.06a4,4,0,0,0,0-7.56ZM60,162.37V45.63L227.82,104Z"/>
    </svg>
  );
}
