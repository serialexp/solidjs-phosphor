import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCellSignalFullThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNjQsNzJWMjAwYTQsNCwwLDAsMS04LDBWNzJhNCw0LDAsMCwxLDgsMFptMzYtNDRhNCw0LDAsMCwwLTQsNFYyMDBhNCw0LDAsMCwwLDgsMFYzMkE0LDQsMCwwLDAsMjAwLDI4Wm0tODAsODBhNCw0LDAsMCwwLTQsNHY4OGE0LDQsMCwwLDAsOCwwVjExMkE0LDQsMCwwLDAsMTIwLDEwOFpNODAsMTQ4YTQsNCwwLDAsMC00LDR2NDhhNCw0LDAsMCwwLDgsMFYxNTJBNCw0LDAsMCwwLDgwLDE0OFpNNDAsMTg4YTQsNCwwLDAsMC00LDR2OGE0LDQsMCwwLDAsOCwwdi04QTQsNCwwLDAsMCw0MCwxODhaIi8+PC9zdmc+)
 */
export function PhCellSignalFullThinIcon(props: PhCellSignalFullThinIconProps) {
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
      <path d="M164,72V200a4,4,0,0,1-8,0V72a4,4,0,0,1,8,0Zm36-44a4,4,0,0,0-4,4V200a4,4,0,0,0,8,0V32A4,4,0,0,0,200,28Zm-80,80a4,4,0,0,0-4,4v88a4,4,0,0,0,8,0V112A4,4,0,0,0,120,108ZM80,148a4,4,0,0,0-4,4v48a4,4,0,0,0,8,0V152A4,4,0,0,0,80,148ZM40,188a4,4,0,0,0-4,4v8a4,4,0,0,0,8,0v-8A4,4,0,0,0,40,188Z"/>
    </svg>
  );
}
