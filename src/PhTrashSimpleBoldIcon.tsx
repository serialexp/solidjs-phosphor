import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTrashSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINDBhMTIsMTIsMCwwLDAsMCwyNGg0VjIwOGEyMCwyMCwwLDAsMCwyMCwyMEgxOTJhMjAsMjAsMCwwLDAsMjAtMjBWNzJoNGExMiwxMiwwLDAsMCwwLTI0Wk0xODgsMjA0SDY4VjcySDE4OFpNNzYsMjBBMTIsMTIsMCwwLDEsODgsOGg4MGExMiwxMiwwLDAsMSwwLDI0SDg4QTEyLDEyLDAsMCwxLDc2LDIwWiIvPjwvc3ZnPg==)
 */
export function PhTrashSimpleBoldIcon(props: PhTrashSimpleBoldIconProps) {
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
      <path d="M216,48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM188,204H68V72H188ZM76,20A12,12,0,0,1,88,8h80a12,12,0,0,1,0,24H88A12,12,0,0,1,76,20Z"/>
    </svg>
  );
}
