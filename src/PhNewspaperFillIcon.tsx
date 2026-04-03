import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNewspaperFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMTYsNDhINTZBMTYsMTYsMCwwLDAsNDAsNjRWMTg0YTgsOCwwLDAsMS0xNiwwVjg4QTgsOCwwLDAsMCw4LDg4djk2LjExQTI0LDI0LDAsMCwwLDMyLDIwOEgyMDhhMjQsMjQsMCwwLDAsMjQtMjRWNjRBMTYsMTYsMCwwLDAsMjE2LDQ4Wk0xNzYsMTUySDk2YTgsOCwwLDAsMSwwLTE2aDgwYTgsOCwwLDAsMSwwLDE2Wm0wLTMySDk2YTgsOCwwLDAsMSwwLTE2aDgwYTgsOCwwLDAsMSwwLDE2WiIvPjwvc3ZnPg==)
 */
export function PhNewspaperFillIcon(props: PhNewspaperFillIconProps) {
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
      <path d="M216,48H56A16,16,0,0,0,40,64V184a8,8,0,0,1-16,0V88A8,8,0,0,0,8,88v96.11A24,24,0,0,0,32,208H208a24,24,0,0,0,24-24V64A16,16,0,0,0,216,48ZM176,152H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"/>
    </svg>
  );
}
