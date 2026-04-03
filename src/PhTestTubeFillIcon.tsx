import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhTestTubeFillIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0yMzcuNjYsODYuMzRsLTYwLTYwYTgsOCwwLDAsMC0xMS4zMiwwTDM3LjExLDE1NS41N2E0NC43Nyw0NC43NywwLDAsMCw2My4zMiw2My4zMkwyMTIuMzIsMTA3bDIyLjIxLTcuNGE4LDgsMCwwLDAsMy4xMy0xMy4yNVptLTMyLjE5LDYuMDdhOCw4LDAsMCwwLTMuMTMsMS45M2wtMzkuNTcsMzkuNTdjLTguNDcsMi45LTIxLjc1LDQtMzkuMDctNS0xMC42LTUuNTQtMjAuMTgtOC0yOC41Ni04LjczTDE3Miw0My4zMSwyMTcuMTksODguNVoiLz48L3N2Zz4=)
 */
export function PhTestTubeFillIcon(props: PhTestTubeFillIconProps) {
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
      <path d="M237.66,86.34l-60-60a8,8,0,0,0-11.32,0L37.11,155.57a44.77,44.77,0,0,0,63.32,63.32L212.32,107l22.21-7.4a8,8,0,0,0,3.13-13.25Zm-32.19,6.07a8,8,0,0,0-3.13,1.93l-39.57,39.57c-8.47,2.9-21.75,4-39.07-5-10.6-5.54-20.18-8-28.56-8.73L172,43.31,217.19,88.5Z"/>
    </svg>
  );
}
