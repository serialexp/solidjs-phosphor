import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhAvocadoFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTEsMTMwLjY2LDE4MS4yLDQ2LjQ3YTU2LDU2LDAsMCwwLTEwNi0xLjE0aDBsLTI5LjUxLDgzLjVBODgsODgsMCwxLDAsMjExLDEzMC42NlpNMTI4LDIwMGE0MCw0MCwwLDEsMSw0MC00MEE0MCw0MCwwLDAsMSwxMjgsMjAwWiIvPjwvc3ZnPg==)
 */
export function PhAvocadoFillIcon(props: PhAvocadoFillIconProps) {
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
      <path d="M211,130.66,181.2,46.47a56,56,0,0,0-106-1.14h0l-29.51,83.5A88,88,0,1,0,211,130.66ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z"/>
    </svg>
  );
}
