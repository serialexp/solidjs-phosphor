import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhMetronomeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xODcuMTQsMTE0Ljg0bDI2Ljc4LTI5LjQ2YTgsOCwwLDAsMC0xMS44NC0xMC43NmwtMjAuNTUsMjIuNi0xNy4yLTU0LjA3QTE1Ljk0LDE1Ljk0LDAsMCwwLDE0OS4wOCwzMkgxMDYuOTFBMTUuOTQsMTUuOTQsMCwwLDAsOTEuNjYsNDMuMTVsLTUwLjkxLDE2MEExNiwxNiwwLDAsMCw1NiwyMjRIMjAwYTE2LDE2LDAsMCwwLDE1LjI1LTIwLjg1Wk03MS4yNywxNjAsMTA2LjkxLDQ4aDQyLjE3bDIwLDYyLjlMMTI0LjQ2LDE2MFptNzQuODEsMCwyOC42Mi0zMS40OCwxMCwzMS40OFoiLz48L3N2Zz4=)
 */
export function PhMetronomeFillIcon(props: PhMetronomeFillIconProps) {
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
      <path d="M187.14,114.84l26.78-29.46a8,8,0,0,0-11.84-10.76l-20.55,22.6-17.2-54.07A15.94,15.94,0,0,0,149.08,32H106.91A15.94,15.94,0,0,0,91.66,43.15l-50.91,160A16,16,0,0,0,56,224H200a16,16,0,0,0,15.25-20.85ZM71.27,160,106.91,48h42.17l20,62.9L124.46,160Zm74.81,0,28.62-31.48,10,31.48Z"/>
    </svg>
  );
}
