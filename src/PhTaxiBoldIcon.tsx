import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTaxiBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yNDAsMTAwaC05TDIwNC43Miw1NC4wOEEyMCwyMCwwLDAsMCwxODcuMzYsNDRIMTY4LjEybC0xMS0yNy40M0ExOS45LDE5LjksMCwwLDAsMTM4LjU4LDRIMTE3LjQyQTE5LjksMTkuOSwwLDAsMCw5OC44NSwxNi41N0w4Ny44OCw0NEg2OC42NEEyMCwyMCwwLDAsMCw1MS4yOCw1NC4wOEwyNSwxMDBIMTZhMTIsMTIsMCwwLDAsMCwyNGg0djc2YTIwLDIwLDAsMCwwLDIwLDIwSDY4YTIwLDIwLDAsMCwwLDIwLTIwVjE4MGg4MHYyMGEyMCwyMCwwLDAsMCwyMCwyMGgyOGEyMCwyMCwwLDAsMCwyMC0yMFYxMjRoNGExMiwxMiwwLDAsMCwwLTI0Wk0xMjAuMTIsMjhoMTUuNzZsNi40LDE2SDExMy43MlpNNzEsNjhIMTg1bDE4LjI4LDMySDUyLjY4Wk02NCwxOTZINDRWMTgwSDY0Wm0xNDgsMEgxOTJWMTgwaDIwWm0wLTQwSDQ0VjEyNEgyMTJaIi8+PC9zdmc+)
 */
export function PhTaxiBoldIcon(props: PhTaxiBoldIconProps) {
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
      <path d="M240,100h-9L204.72,54.08A20,20,0,0,0,187.36,44H168.12l-11-27.43A19.9,19.9,0,0,0,138.58,4H117.42A19.9,19.9,0,0,0,98.85,16.57L87.88,44H68.64A20,20,0,0,0,51.28,54.08L25,100H16a12,12,0,0,0,0,24h4v76a20,20,0,0,0,20,20H68a20,20,0,0,0,20-20V180h80v20a20,20,0,0,0,20,20h28a20,20,0,0,0,20-20V124h4a12,12,0,0,0,0-24ZM120.12,28h15.76l6.4,16H113.72ZM71,68H185l18.28,32H52.68ZM64,196H44V180H64Zm148,0H192V180h20Zm0-40H44V124H212Z"/>
    </svg>
  );
}
