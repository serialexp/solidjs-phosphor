import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhSkipBackBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMDEuNzUsMzAuNTJhMjAsMjAsMCwwLDAtMjAuMy41M0w2OCwxMDJWNDBhMTIsMTIsMCwwLDAtMjQsMFYyMTZhMTIsMTIsMCwwLDAsMjQsMFYxNTRsMTEzLjQ1LDcxQTIwLDIwLDAsMCwwLDIxMiwyMDguMTJWNDcuODhBMTkuODYsMTkuODYsMCwwLDAsMjAxLjc1LDMwLjUyWk0xODgsMjAwLjczLDcxLjcsMTI4LDE4OCw1NS4yN1oiLz48L3N2Zz4=)
 */
export function PhSkipBackBoldIcon(props: PhSkipBackBoldIconProps) {
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
      <path d="M201.75,30.52a20,20,0,0,0-20.3.53L68,102V40a12,12,0,0,0-24,0V216a12,12,0,0,0,24,0V154l113.45,71A20,20,0,0,0,212,208.12V47.88A19.86,19.86,0,0,0,201.75,30.52ZM188,200.73,71.7,128,188,55.27Z"/>
    </svg>
  );
}
