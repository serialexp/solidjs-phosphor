import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalMediumThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMjQsMTEydjg4YTQsNCwwLDAsMS04LDBWMTEyYTQsNCwwLDAsMSw4LDBaTTgwLDE0OGE0LDQsMCwwLDAtNCw0djQ4YTQsNCwwLDAsMCw4LDBWMTUyQTQsNCwwLDAsMCw4MCwxNDhaTTQwLDE4OGE0LDQsMCwwLDAtNCw0djhhNCw0LDAsMCwwLDgsMHYtOEE0LDQsMCwwLDAsNDAsMTg4WiIvPjwvc3ZnPg==)
 */
export function PhCellSignalMediumThinIcon(props: PhCellSignalMediumThinIconProps) {
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
      <path d="M124,112v88a4,4,0,0,1-8,0V112a4,4,0,0,1,8,0ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z"/>
    </svg>
  );
}
