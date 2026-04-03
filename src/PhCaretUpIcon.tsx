import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretUpIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTMuNjYsMTY1LjY2YTgsOCwwLDAsMS0xMS4zMiwwTDEyOCw5MS4zMSw1My42NiwxNjUuNjZhOCw4LDAsMCwxLTExLjMyLTExLjMybDgwLTgwYTgsOCwwLDAsMSwxMS4zMiwwbDgwLDgwQTgsOCwwLDAsMSwyMTMuNjYsMTY1LjY2WiIvPjwvc3ZnPg==)
 */
export function PhCaretUpIcon(props: PhCaretUpIconProps) {
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
      <path d="M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"/>
    </svg>
  );
}
