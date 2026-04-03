import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalFullIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjgsNzJWMjAwYTgsOCwwLDAsMS0xNiwwVjcyYTgsOCwwLDAsMSwxNiwwWm0zMi00OGE4LDgsMCwwLDAtOCw4VjIwMGE4LDgsMCwwLDAsMTYsMFYzMkE4LDgsMCwwLDAsMjAwLDI0Wm0tODAsODBhOCw4LDAsMCwwLTgsOHY4OGE4LDgsMCwwLDAsMTYsMFYxMTJBOCw4LDAsMCwwLDEyMCwxMDRaTTgwLDE0NGE4LDgsMCwwLDAtOCw4djQ4YTgsOCwwLDAsMCwxNiwwVjE1MkE4LDgsMCwwLDAsODAsMTQ0Wk00MCwxODRhOCw4LDAsMCwwLTgsOHY4YTgsOCwwLDAsMCwxNiwwdi04QTgsOCwwLDAsMCw0MCwxODRaIi8+PC9zdmc+)
 */
export function PhCellSignalFullIcon(props: PhCellSignalFullIconProps) {
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
      <path d="M168,72V200a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm32-48a8,8,0,0,0-8,8V200a8,8,0,0,0,16,0V32A8,8,0,0,0,200,24Zm-80,80a8,8,0,0,0-8,8v88a8,8,0,0,0,16,0V112A8,8,0,0,0,120,104ZM80,144a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V152A8,8,0,0,0,80,144ZM40,184a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,40,184Z"/>
    </svg>
  );
}
