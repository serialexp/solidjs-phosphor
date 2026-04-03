import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineLeftThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xOTQuODMsMjA1LjE3YTQsNCwwLDAsMS01LjY2LDUuNjZsLTgwLTgwYTQsNCwwLDAsMSwwLTUuNjZsODAtODBhNCw0LDAsMSwxLDUuNjYsNS42NkwxMTcuNjYsMTI4Wk03Miw0NGE0LDQsMCwwLDAtNCw0VjIwOGE0LDQsMCwwLDAsOCwwVjQ4QTQsNCwwLDAsMCw3Miw0NFoiLz48L3N2Zz4=)
 */
export function PhCaretLineLeftThinIcon(props: PhCaretLineLeftThinIconProps) {
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
      <path d="M194.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L117.66,128ZM72,44a4,4,0,0,0-4,4V208a4,4,0,0,0,8,0V48A4,4,0,0,0,72,44Z"/>
    </svg>
  );
}
