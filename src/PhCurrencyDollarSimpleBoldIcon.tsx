import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCurrencyDollarSimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDQsMTY4YTUyLjA2LDUyLjA2LDAsMCwxLTUyLDUySDE0MHYxMmExMiwxMiwwLDAsMS0yNCwwVjIyMEgxMDRhNTIuMDYsNTIuMDYsMCwwLDEtNTItNTIsMTIsMTIsMCwwLDEsMjQsMCwyOCwyOCwwLDAsMCwyOCwyOGg0OGEyOCwyOCwwLDAsMCwwLTU2SDExMmE1Miw1MiwwLDAsMSwwLTEwNGg0VjI0YTEyLDEyLDAsMCwxLDI0LDBWMzZoNGE1Mi4wNiw1Mi4wNiwwLDAsMSw1Miw1MiwxMiwxMiwwLDAsMS0yNCwwLDI4LDI4LDAsMCwwLTI4LTI4SDExMmEyOCwyOCwwLDAsMCwwLDU2aDQwQTUyLjA2LDUyLjA2LDAsMCwxLDIwNCwxNjhaIi8+PC9zdmc+)
 */
export function PhCurrencyDollarSimpleBoldIcon(props: PhCurrencyDollarSimpleBoldIconProps) {
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
      <path d="M204,168a52.06,52.06,0,0,1-52,52H140v12a12,12,0,0,1-24,0V220H104a52.06,52.06,0,0,1-52-52,12,12,0,0,1,24,0,28,28,0,0,0,28,28h48a28,28,0,0,0,0-56H112a52,52,0,0,1,0-104h4V24a12,12,0,0,1,24,0V36h4a52.06,52.06,0,0,1,52,52,12,12,0,0,1-24,0,28,28,0,0,0-28-28H112a28,28,0,0,0,0,56h40A52.06,52.06,0,0,1,204,168Z"/>
    </svg>
  );
}
