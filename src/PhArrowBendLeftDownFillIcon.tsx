import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhArrowBendLeftDownFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDgsMzJhOCw4LDAsMCwxLTgsOCw4OC4xLDg4LjEsMCwwLDAtODgsODh2NDBoNDBhOCw4LDAsMCwxLDUuNjYsMTMuNjZsLTQ4LDQ4YTgsOCwwLDAsMS0xMS4zMiwwbC00OC00OEE4LDgsMCwwLDEsNTYsMTY4SDk2VjEyOEExMDQuMTEsMTA0LjExLDAsMCwxLDIwMCwyNCw4LDgsMCwwLDEsMjA4LDMyWiIvPjwvc3ZnPg==)
 */
export function PhArrowBendLeftDownFillIcon(props: PhArrowBendLeftDownFillIconProps) {
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
      <path d="M208,32a8,8,0,0,1-8,8,88.1,88.1,0,0,0-88,88v40h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,56,168H96V128A104.11,104.11,0,0,1,200,24,8,8,0,0,1,208,32Z"/>
    </svg>
  );
}
