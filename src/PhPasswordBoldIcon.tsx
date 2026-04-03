import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhPasswordBoldIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik00OCw1NlYyMDBhMTIsMTIsMCwwLDEtMjQsMFY1NmExMiwxMiwwLDAsMSwyNCwwWm04Ni43Myw1MC43TDEyMCwxMTEuNDhWOTZhMTIsMTIsMCwwLDAtMjQsMHYxNS40OEw4MS4yNywxMDYuN2ExMiwxMiwwLDEsMC03LjQxLDIyLjgybDE0LjcyLDQuNzktOS4xLDEyLjUyQTEyLDEyLDAsMSwwLDk4LjksMTYwLjk0bDkuMS0xMi41Miw5LjEsMTIuNTJhMTIsMTIsMCwxLDAsMTkuNDItMTQuMTFsLTkuMS0xMi41MiwxNC43Mi00Ljc5YTEyLDEyLDAsMSwwLTcuNDEtMjIuODJabTExNS4xMiw3LjdhMTIsMTIsMCwwLDAtMTUuMTItNy43TDIyMCwxMTEuNDhWOTZhMTIsMTIsMCwwLDAtMjQsMHYxNS40OGwtMTQuNzMtNC43OGExMiwxMiwwLDEsMC03LjQxLDIyLjgybDE0LjcyLDQuNzktOS4xLDEyLjUyYTEyLDEyLDAsMSwwLDE5LjQyLDE0LjExbDkuMS0xMi41Miw5LjEsMTIuNTJhMTIsMTIsMCwxLDAsMTkuNDItMTQuMTFsLTkuMS0xMi41MiwxNC43Mi00Ljc5QTEyLDEyLDAsMCwwLDI0OS44NSwxMTQuNFoiLz48L3N2Zz4=)
 */
export function PhPasswordBoldIcon(props: PhPasswordBoldIconProps) {
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
      <path d="M48,56V200a12,12,0,0,1-24,0V56a12,12,0,0,1,24,0Zm86.73,50.7L120,111.48V96a12,12,0,0,0-24,0v15.48L81.27,106.7a12,12,0,1,0-7.41,22.82l14.72,4.79-9.1,12.52A12,12,0,1,0,98.9,160.94l9.1-12.52,9.1,12.52a12,12,0,1,0,19.42-14.11l-9.1-12.52,14.72-4.79a12,12,0,1,0-7.41-22.82Zm115.12,7.7a12,12,0,0,0-15.12-7.7L220,111.48V96a12,12,0,0,0-24,0v15.48l-14.73-4.78a12,12,0,1,0-7.41,22.82l14.72,4.79-9.1,12.52a12,12,0,1,0,19.42,14.11l9.1-12.52,9.1,12.52a12,12,0,1,0,19.42-14.11l-9.1-12.52,14.72-4.79A12,12,0,0,0,249.85,114.4Z"/>
    </svg>
  );
}
