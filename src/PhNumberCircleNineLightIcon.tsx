import { JSX, splitProps, mergeProps } from "solid-js";

export interface PhNumberCircleNineLightIconProps extends JSX.SvgSVGAttributes<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

/**
 * ![img](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9IiMwMDAiPjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRkZGIiByeD0iNDAiIHJ5PSI0MCIvPjxwYXRoIGQ9Ik0xNDUsNzguNTVBMzQsMzQsMCwxLDAsMTI3Ljk0LDE0MmEzMy41NiwzMy41NiwwLDAsMCw1LjY3LS40OWwtMTguNzYsMzEuNDJhNiw2LDAsMCwwLDEwLjMsNi4xNkwxNTcuNDUsMTI1QTM0LDM0LDAsMCwwLDE0NSw3OC41NVpNMTQ3LjA2LDExOXYwQTIyLDIyLDAsMSwxLDEzOSw4OSwyMiwyMiwwLDAsMSwxNDcuMDUsMTE5Wk0xMjgsMjZBMTAyLDEwMiwwLDEsMCwyMzAsMTI4LDEwMi4xMiwxMDIuMTIsMCwwLDAsMTI4LDI2Wm0wLDE5MmE5MCw5MCwwLDEsMSw5MC05MEE5MC4xLDkwLjEsMCwwLDEsMTI4LDIxOFoiLz48L3N2Zz4=)
 */
export function PhNumberCircleNineLightIcon(props: PhNumberCircleNineLightIconProps) {
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
      <path d="M145,78.55A34,34,0,1,0,127.94,142a33.56,33.56,0,0,0,5.67-.49l-18.76,31.42a6,6,0,0,0,10.3,6.16L157.45,125A34,34,0,0,0,145,78.55ZM147.06,119v0A22,22,0,1,1,139,89,22,22,0,0,1,147.05,119ZM128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z"/>
    </svg>
  );
}
