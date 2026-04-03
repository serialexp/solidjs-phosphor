import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhGreaterThanOrEqualThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik01NC42MiwxNTYuMjUsMTk2LjQzLDEwNCw1NC42Miw1MS43NWE0LDQsMCwwLDEsMi43Ni03LjVsMTUyLDU2YTQsNCwwLDAsMSwwLDcuNWwtMTUyLDU2QTMuOTEsMy45MSwwLDAsMSw1NiwxNjRhNCw0LDAsMCwxLTEuMzgtNy43NVpNMjA4LDE5Nkg1NmE0LDQsMCwwLDAsMCw4SDIwOGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhGreaterThanOrEqualThinIcon(props: PhGreaterThanOrEqualThinIconProps) {
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
      <path d="M54.62,156.25,196.43,104,54.62,51.75a4,4,0,0,1,2.76-7.5l152,56a4,4,0,0,1,0,7.5l-152,56A3.91,3.91,0,0,1,56,164a4,4,0,0,1-1.38-7.75ZM208,196H56a4,4,0,0,0,0,8H208a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
