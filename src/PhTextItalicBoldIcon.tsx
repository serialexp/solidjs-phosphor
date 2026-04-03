import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTextItalicBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsNTZhMTIsMTIsMCwwLDEtMTIsMTJIMTYwLjY1bC00MCwxMjBIMTQ0YTEyLDEyLDAsMCwxLDAsMjRINjRhMTIsMTIsMCwwLDEsMC0yNEg5NS4zNWw0MC0xMjBIMTEyYTEyLDEyLDAsMCwxLDAtMjRoODBBMTIsMTIsMCwwLDEsMjA0LDU2WiIvPjwvc3ZnPg==)
 */
export function PhTextItalicBoldIcon(props: PhTextItalicBoldIconProps) {
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
      <path d="M204,56a12,12,0,0,1-12,12H160.65l-40,120H144a12,12,0,0,1,0,24H64a12,12,0,0,1,0-24H95.35l40-120H112a12,12,0,0,1,0-24h80A12,12,0,0,1,204,56Z"/>
    </svg>
  );
}
