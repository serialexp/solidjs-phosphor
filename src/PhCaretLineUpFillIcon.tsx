import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineUpFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTg2LjM0QTgsOCwwLDAsMSwyMDgsMjAwSDQ4YTgsOCwwLDAsMS01LjY2LTEzLjY2bDgwLTgwYTgsOCwwLDAsMSwxMS4zMiwwWk00OCw4MEgyMDhhOCw4LDAsMCwwLDAtMTZINDhhOCw4LDAsMCwwLDAsMTZaIi8+PC9zdmc+)
 */
export function PhCaretLineUpFillIcon(props: PhCaretLineUpFillIconProps) {
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
      <path d="M213.66,186.34A8,8,0,0,1,208,200H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0ZM48,80H208a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Z"/>
    </svg>
  );
}
