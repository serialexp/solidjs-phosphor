import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSketchLogoBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDksOTYuMWwtNTYtNjRhMTIsMTIsMCwwLDAtOS00LjFINzJhMTIsMTIsMCwwLDAtOSw0LjFMNyw5Ni4xYTEyLDEyLDAsMCwwLC4yNiwxNi4wOWwxMTIsMTIwYTEyLDEyLDAsMCwwLDE3LjU0LDBsMTEyLTEyMEExMiwxMiwwLDAsMCwyNDksOTYuMVpNMjEzLjU1LDkySDE4MkwxNTIsNTJoMjYuNTVaTTcxLjg4LDExNmwyMS4xOSw1M0w0My42MSwxMTZabTg2LjQsMEwxMjgsMTkxLjY5LDk3LjcyLDExNlpNMTA0LDkybDI0LTMyLDI0LDMyWm04MC4xMiwyNGgyOC4yN2wtNDkuNDYsNTNaTTc3LjQ1LDUySDEwNEw3NCw5Mkg0Mi40NVoiLz48L3N2Zz4=)
 */
export function PhSketchLogoBoldIcon(props: PhSketchLogoBoldIconProps) {
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
      <path d="M249,96.1l-56-64a12,12,0,0,0-9-4.1H72a12,12,0,0,0-9,4.1L7,96.1a12,12,0,0,0,.26,16.09l112,120a12,12,0,0,0,17.54,0l112-120A12,12,0,0,0,249,96.1ZM213.55,92H182L152,52h26.55ZM71.88,116l21.19,53L43.61,116Zm86.4,0L128,191.69,97.72,116ZM104,92l24-32,24,32Zm80.12,24h28.27l-49.46,53ZM77.45,52H104L74,92H42.45Z"/>
    </svg>
  );
}
