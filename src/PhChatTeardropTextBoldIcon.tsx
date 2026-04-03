import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatTeardropTextBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzYsMTA4YTEyLDEyLDAsMCwxLTEyLDEySDk2YTEyLDEyLDAsMCwxLDAtMjRoNjhBMTIsMTIsMCwwLDEsMTc2LDEwOFptLTEyLDI4SDk2YTEyLDEyLDAsMCwwLDAsMjRoNjhhMTIsMTIsMCwwLDAsMC0yNFptNzItMTJBMTA0LjExLDEwNC4xMSwwLDAsMSwxMzIsMjI4SDQ4YTIwLDIwLDAsMCwxLTIwLTIwVjEyNGExMDQsMTA0LDAsMCwxLDIwOCwwWm0tMjQsMGE4MCw4MCwwLDAsMC0xNjAsMHY4MGg4MEE4MC4wOSw4MC4wOSwwLDAsMCwyMTIsMTI0WiIvPjwvc3ZnPg==)
 */
export function PhChatTeardropTextBoldIcon(props: PhChatTeardropTextBoldIconProps) {
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
      <path d="M176,108a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h68A12,12,0,0,1,176,108Zm-12,28H96a12,12,0,0,0,0,24h68a12,12,0,0,0,0-24Zm72-12A104.11,104.11,0,0,1,132,228H48a20,20,0,0,1-20-20V124a104,104,0,0,1,208,0Zm-24,0a80,80,0,0,0-160,0v80h80A80.09,80.09,0,0,0,212,124Z"/>
    </svg>
  );
}
