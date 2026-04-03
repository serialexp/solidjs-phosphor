import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChatTeardropDotsBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMzIsMjBBMTA0LjExLDEwNC4xMSwwLDAsMCwyOCwxMjR2ODRhMjAsMjAsMCwwLDAsMjAsMjBoODRhMTA0LDEwNCwwLDAsMCwwLTIwOFptMCwxODRINTJWMTI0YTgwLDgwLDAsMSwxLDgwLDgwWm0tOC03NmExNiwxNiwwLDEsMS0xNi0xNkExNiwxNiwwLDAsMSwxMjQsMTI4Wm00OCwwYTE2LDE2LDAsMSwxLTE2LTE2QTE2LDE2LDAsMCwxLDE3MiwxMjhaIi8+PC9zdmc+)
 */
export function PhChatTeardropDotsBoldIcon(props: PhChatTeardropDotsBoldIconProps) {
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
      <path d="M132,20A104.11,104.11,0,0,0,28,124v84a20,20,0,0,0,20,20h84a104,104,0,0,0,0-208Zm0,184H52V124a80,80,0,1,1,80,80Zm-8-76a16,16,0,1,1-16-16A16,16,0,0,1,124,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,172,128Z"/>
    </svg>
  );
}
