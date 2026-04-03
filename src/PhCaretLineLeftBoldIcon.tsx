import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineLeftBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDAuNDksMTk5LjUxYTEyLDEyLDAsMCwxLTE3LDE3bC04MC04MGExMiwxMiwwLDAsMSwwLTE3bDgwLTgwYTEyLDEyLDAsMCwxLDE3LDE3TDEyOSwxMjhaTTcyLDM2QTEyLDEyLDAsMCwwLDYwLDQ4VjIwOGExMiwxMiwwLDAsMCwyNCwwVjQ4QTEyLDEyLDAsMCwwLDcyLDM2WiIvPjwvc3ZnPg==)
 */
export function PhCaretLineLeftBoldIcon(props: PhCaretLineLeftBoldIconProps) {
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
      <path d="M200.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L129,128ZM72,36A12,12,0,0,0,60,48V208a12,12,0,0,0,24,0V48A12,12,0,0,0,72,36Z"/>
    </svg>
  );
}
