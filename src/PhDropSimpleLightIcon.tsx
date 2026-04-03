import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhDropSimpleLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNzIuNTMsNDkuMDZhMjUxLjQyLDI1MS40MiwwLDAsMC00MS4wOS0zOCw2LDYsMCwwLDAtNi44OCwwLDI1MS40MiwyNTEuNDIsMCwwLDAtNDEuMDksMzhDNTYuMzQsODAuMjYsNDIsMTEzLjA5LDQyLDE0NGE4Niw4NiwwLDAsMCwxNzIsMEMyMTQsMTEzLjA5LDE5OS42Niw4MC4yNiwxNzIuNTMsNDkuMDZaTTEyOCwyMThhNzQuMDksNzQuMDksMCwwLDEtNzQtNzRjMC01OS42Miw1OS0xMDguOTMsNzQtMTIwLjUxQzE0MywzNS4wNywyMDIsODQuMzgsMjAyLDE0NEE3NC4wOSw3NC4wOSwwLDAsMSwxMjgsMjE4WiIvPjwvc3ZnPg==)
 */
export function PhDropSimpleLightIcon(props: PhDropSimpleLightIconProps) {
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
      <path d="M172.53,49.06a251.42,251.42,0,0,0-41.09-38,6,6,0,0,0-6.88,0,251.42,251.42,0,0,0-41.09,38C56.34,80.26,42,113.09,42,144a86,86,0,0,0,172,0C214,113.09,199.66,80.26,172.53,49.06ZM128,218a74.09,74.09,0,0,1-74-74c0-59.62,59-108.93,74-120.51C143,35.07,202,84.38,202,144A74.09,74.09,0,0,1,128,218Z"/>
    </svg>
  );
}
