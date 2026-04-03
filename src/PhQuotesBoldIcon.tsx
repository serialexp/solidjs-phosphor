import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhQuotesBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsNTJINDBBMjAsMjAsMCwwLDAsMjAsNzJ2NjRhMjAsMjAsMCwwLDAsMjAsMjBIOTZ2NGEyOCwyOCwwLDAsMS0yOCwyOCwxMiwxMiwwLDAsMCwwLDI0LDUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjcyQTIwLDIwLDAsMCwwLDEwMCw1MlptLTQsODBINDRWNzZIOTZaTTIxNiw1MkgxNTZhMjAsMjAsMCwwLDAtMjAsMjB2NjRhMjAsMjAsMCwwLDAsMjAsMjBoNTZ2NGEyOCwyOCwwLDAsMS0yOCwyOCwxMiwxMiwwLDAsMCwwLDI0LDUyLjA2LDUyLjA2LDAsMCwwLDUyLTUyVjcyQTIwLDIwLDAsMCwwLDIxNiw1MlptLTQsODBIMTYwVjc2aDUyWiIvPjwvc3ZnPg==)
 */
export function PhQuotesBoldIcon(props: PhQuotesBoldIconProps) {
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
      <path d="M100,52H40A20,20,0,0,0,20,72v64a20,20,0,0,0,20,20H96v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,100,52Zm-4,80H44V76H96ZM216,52H156a20,20,0,0,0-20,20v64a20,20,0,0,0,20,20h56v4a28,28,0,0,1-28,28,12,12,0,0,0,0,24,52.06,52.06,0,0,0,52-52V72A20,20,0,0,0,216,52Zm-4,80H160V76h52Z"/>
    </svg>
  );
}
