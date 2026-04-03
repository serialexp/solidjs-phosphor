import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhCaretLineDownThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00NS4xNyw3NC44M2E0LDQsMCwwLDEsNS42Ni01LjY2TDEyOCwxNDYuMzRsNzcuMTctNzcuMTdhNCw0LDAsMSwxLDUuNjYsNS42NmwtODAsODBhNCw0LDAsMCwxLTUuNjYsMFpNMjA4LDE4OEg0OGE0LDQsMCwwLDAsMCw4SDIwOGE0LDQsMCwwLDAsMC04WiIvPjwvc3ZnPg==)
 */
export function PhCaretLineDownThinIcon(props: PhCaretLineDownThinIconProps) {
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
      <path d="M45.17,74.83a4,4,0,0,1,5.66-5.66L128,146.34l77.17-77.17a4,4,0,1,1,5.66,5.66l-80,80a4,4,0,0,1-5.66,0ZM208,188H48a4,4,0,0,0,0,8H208a4,4,0,0,0,0-8Z"/>
    </svg>
  );
}
