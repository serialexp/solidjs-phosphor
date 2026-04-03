import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendDownRightThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMjYuODMsMTU0LjgzbC00OCw0OGE0LDQsMCwwLDEtNS42Ni01LjY2TDIxNC4zNCwxNTZIMTI4QTEwMC4xMSwxMDAuMTEsMCwwLDEsMjgsNTZhNCw0LDAsMCwxLDgsMCw5Mi4xLDkyLjEsMCwwLDAsOTIsOTJoODYuMzRsLTQxLjE3LTQxLjE3YTQsNCwwLDAsMSw1LjY2LTUuNjZsNDgsNDhBNCw0LDAsMCwxLDIyNi44MywxNTQuODNaIi8+PC9zdmc+)
 */
export function PhArrowBendDownRightThinIcon(props: PhArrowBendDownRightThinIconProps) {
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
      <path d="M226.83,154.83l-48,48a4,4,0,0,1-5.66-5.66L214.34,156H128A100.11,100.11,0,0,1,28,56a4,4,0,0,1,8,0,92.1,92.1,0,0,0,92,92h86.34l-41.17-41.17a4,4,0,0,1,5.66-5.66l48,48A4,4,0,0,1,226.83,154.83Z"/>
    </svg>
  );
}
