import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCopySimpleBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODAsNjRINDBBMTIsMTIsMCwwLDAsMjgsNzZWMjE2YTEyLDEyLDAsMCwwLDEyLDEySDE4MGExMiwxMiwwLDAsMCwxMi0xMlY3NkExMiwxMiwwLDAsMCwxODAsNjRaTTE2OCwyMDRINTJWODhIMTY4Wk0yMjgsNDBWMTgwYTEyLDEyLDAsMCwxLTI0LDBWNTJINzZhMTIsMTIsMCwwLDEsMC0yNEgyMTZBMTIsMTIsMCwwLDEsMjI4LDQwWiIvPjwvc3ZnPg==)
 */
export function PhCopySimpleBoldIcon(props: PhCopySimpleBoldIconProps) {
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
      <path d="M180,64H40A12,12,0,0,0,28,76V216a12,12,0,0,0,12,12H180a12,12,0,0,0,12-12V76A12,12,0,0,0,180,64ZM168,204H52V88H168ZM228,40V180a12,12,0,0,1-24,0V52H76a12,12,0,0,1,0-24H216A12,12,0,0,1,228,40Z"/>
    </svg>
  );
}
