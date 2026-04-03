import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhChartPieSliceThinIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xMDAsMTA5LjV2LTcyYTQsNCwwLDAsMC01LjMzLTMuNzcsMTAwLDEwMCwwLDAsMC02NSwxMTIuNUE0LDQsMCwwLDAsMzUuNiwxNDlMOTgsMTEzQTQsNCwwLDAsMCwxMDAsMTA5LjVabS04LTIuMzFMMzYuNjcsMTM5LjExQTkyLDkyLDAsMCwxLDkyLDQzLjM0Wk0xMjgsMjhhNCw0LDAsMCwwLTQsNHY5NC4xMkw0My4yLDE3My4xOGE0LDQsMCwwLDAtMS40Myw1LjQ5QTEwMCwxMDAsMCwxLDAsMTI4LDI4Wm0wLDE5MmE5Mi40Nyw5Mi40NywwLDAsMS03Ny4yMi00MkwxMzAsMTMxLjg4YTQsNCwwLDAsMCwyLTMuNDZWMzYuMDlBOTIsOTIsMCwwLDEsMTI4LDIyMFoiLz48L3N2Zz4=)
 */
export function PhChartPieSliceThinIcon(props: PhChartPieSliceThinIconProps) {
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
      <path d="M100,109.5v-72a4,4,0,0,0-5.33-3.77,100,100,0,0,0-65,112.5A4,4,0,0,0,35.6,149L98,113A4,4,0,0,0,100,109.5Zm-8-2.31L36.67,139.11A92,92,0,0,1,92,43.34ZM128,28a4,4,0,0,0-4,4v94.12L43.2,173.18a4,4,0,0,0-1.43,5.49A100,100,0,1,0,128,28Zm0,192a92.47,92.47,0,0,1-77.22-42L130,131.88a4,4,0,0,0,2-3.46V36.09A92,92,0,0,1,128,220Z"/>
    </svg>
  );
}
