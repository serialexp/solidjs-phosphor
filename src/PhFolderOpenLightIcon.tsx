import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhFolderOpenLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDMuMzYsMTExLjgxQTE0LDE0LDAsMCwwLDIzMiwxMDZIMjE0Vjg4YTE0LDE0LDAsMCwwLTE0LTE0SDEzMEwxMDEuNzQsNTIuOGExNC4wNiwxNC4wNiwwLDAsMC04LjQtMi44SDQwQTE0LDE0LDAsMCwwLDI2LDY0VjIwOGE2LDYsMCwwLDAsNiw2SDIxMS4xYTYsNiwwLDAsMCw1LjY5LTQuMWwyOC40OS04NS40N0ExNCwxNCwwLDAsMCwyNDMuMzYsMTExLjgxWk00MCw2Mkg5My4zNGEyLDIsMCwwLDEsMS4yLjRMMTI0LjQsODQuOEE2LDYsMCwwLDAsMTI4LDg2aDcyYTIsMiwwLDAsMSwyLDJ2MThINjkuNzdhMTQsMTQsMCwwLDAtMTMuMjgsOS41N0wzOCwxNzFWNjRBMiwyLDAsMCwxLDQwLDYyWm0xOTMuOSw1OC42M0wyMDYuNzgsMjAySDQwLjMzbDI3LjU0LTgyLjYzYTIsMiwwLDAsMSwxLjktMS4zN0gyMzJhMiwyLDAsMCwxLDEuOSwyLjYzWiIvPjwvc3ZnPg==)
 */
export function PhFolderOpenLightIcon(props: PhFolderOpenLightIconProps) {
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
      <path d="M243.36,111.81A14,14,0,0,0,232,106H214V88a14,14,0,0,0-14-14H130L101.74,52.8a14.06,14.06,0,0,0-8.4-2.8H40A14,14,0,0,0,26,64V208a6,6,0,0,0,6,6H211.1a6,6,0,0,0,5.69-4.1l28.49-85.47A14,14,0,0,0,243.36,111.81ZM40,62H93.34a2,2,0,0,1,1.2.4L124.4,84.8A6,6,0,0,0,128,86h72a2,2,0,0,1,2,2v18H69.77a14,14,0,0,0-13.28,9.57L38,171V64A2,2,0,0,1,40,62Zm193.9,58.63L206.78,202H40.33l27.54-82.63a2,2,0,0,1,1.9-1.37H232a2,2,0,0,1,1.9,2.63Z"/>
    </svg>
  );
}
